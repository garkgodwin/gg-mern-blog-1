const {
  authJwt,
  mongooseErrorHandler,
} = require("../middlewares/index.js");
const controller = require("../controllers/upload.controller.js");

module.exports = function (app) {
  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  router.post(
    "/",
    [authJwt.verifyToken, authJwt.isAuthorOrAdmin],
    controller.uploadImage
  );

  app.use("/api/uploads", router);
};
