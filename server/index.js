const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieSession = require("cookie-session");
const mongooseErrorHandler = require("./app/middlewares/mongoErrorHandler");

const app = express();
app.use(helmet());

/* Reduce fingerprinting
  parse requests of content-type - application/json
  parse requests of content-type - application/x-www-form-urlencoded
*/

// TODO: uncomment cors if testing api only to allow access
var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app
  .disable("x-powered-by")
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cors(corsOptions))
  .use(
    cookieSession({
      name: "gark-session",
      keys: ["COOKIE_SECRET"], // should use as secret environment variable
      httpOnly: true,
    })
  );

// simple route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome!" });
});

// db connection
const db = require("./app/models");
const {
  createAdminOnStart,
} = require("./app/controllers/auth.controller");
const {
  createCategoryOnStart,
  createTagOnStart,
} = require("./app/controllers/category-tags.controller");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Server is now connected to the database.");
  })
  .catch((error) => {
    console.log("Server cannot connect to the database.");
    console.log(`Error: ${error}`);
    process.exit();
  });

//!! FOR expressV5 - no more error calling in api calls. V5 handles it
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ message: "Something broke!" });
});

//? ROUTES
require("./app/routes/tutorial.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/post.routes")(app);
//?? DEFAULTS
createAdminOnStart();
createCategoryOnStart();
createTagOnStart();

app.use(mongooseErrorHandler);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
