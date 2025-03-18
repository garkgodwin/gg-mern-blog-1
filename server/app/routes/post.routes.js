const { authJwt, mongooseErrorHandler } = require("../middlewares");
const controller = require("../controllers/post.controller");

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
    controller.createPost
  );
  router.put(
    "/:id/title-and-content",
    [authJwt.verifyToken, authJwt.isAuthorOrAdmin],
    controller.updatePostContent
  );
  router.delete(
    "/:id",
    [authJwt.verifyToken, authJwt.isAuthorOrAdmin],
    controller.deletePost
  );
  router.get("/", controller.getAllPosts);
  router.get("/:id", controller.getPostById);

  app.use("/api/posts", router);
};
