const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  router.get("/all", controller.allAccess);

  //? ADMIN FUNCTIONS
  router.get(
    "/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
  router.get(
    "/",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getUsers
  );
  router.get(
    "/:id",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.getUserById
  );

  router.get(
    "/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  router.get(
    "/test/author",
    [authJwt.verifyToken, authJwt.isAuthor],
    controller.authorBoard
  );
  router.get(
    "/test/subscriber",
    [authJwt.verifyToken, authJwt.isSubscriber],
    controller.subscriberBoard
  );

  app.use("/api/users", router);
};
