const { authJwt, mongooseErrorHandler } = require("../middlewares");
const controller = require("../controllers/blog.controller.js");

module.exports = function (app) {
  var router = require("express").Router();

  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  router.get("/categories", controller.getCategories);
  router.post(
    "/",
    [authJwt.verifyToken, authJwt.isAuthorOrAdmin],
    controller.createBlog
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

  app.use("/api/blogs", router);
};
