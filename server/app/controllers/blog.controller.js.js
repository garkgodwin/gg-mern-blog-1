const db = require("../models");
const Blog = db.blogs;
const Tag = db.tags;
const ROLES = db.ROLES;
const categories = require("../data/categories");

exports.getCategories = async (req, res, next) => {
  return res.status(200).send({
    categories: categories,
  });
};

exports.createBlog = async (req, res, next) => {
  // Create a Post
  const {
    title, // USER INPUT
    slug, // USER INPUT auto generated or depends on user input
    //author, // SYSTEM INPUT depends on who is currently logged in
    content, // USER INPUT
    summary, //A brief preview or overview of the post content.
    categories, // USER INPUT - will be category id, SYSTEM INPUT if category does not exist, it will need to be created in db
    tags, // USER INPUT - will tags ids, SYSTEM INPUT if tag/s does not exist, it will need to be created in db
    coverImage, // SYSTEM INPUT url of the image, so would need to be created in db
    // publishDate, // EMPTY will be empty when creating post, mods will need to allow
    //status, // SYTEM INPUT status default is draft, so no need from inpuit
    //readTime, // SYSTEM INPUT calculate the number of words divided by 200
    //TODO: add this: seoTitle, //  USER INPUT what will be seen in title tag(from FRONT END, auto populate/limits to recommended number of words or user INPUT)
    //TODO: add this metaDescription, // USER INPUT
  } = req.body;

  return res.status(200).send({
    message: "Server recieved",
    data: req.body,
  });

  // populate only to tags that exist
  const tagIds = [];
  for (let i = 0; i < tags.length; i++) {
    await Tag.findOne({ name: tags[i] }).then((data) => {
      if (data) {
        tagIds.push(data.id);
      }
    });
  }
  //TODO: saving image

  let wordCount = 0;
  wordCount = title.length + content.introduction.length;
  const sections = content.sections;
  for (let i = 0; i < sections.length; i++) {
    wordCount += sections[i].body.length + sections[i].heading.length;
  }
  wordCount += content.conclusion.length;

  const post = new Post({
    title: title,
    content: content,
    slug: slug,
    author: req.userId,
    tags: tagIds,
    category: catExist.id,
    status: "draft",
    readTime: wordCount / 200,
    seoTitle: seoTitle,
    metaDescription: metaDescription,
  });

  // Save Tutorial in the database
  post
    .save()
    .then((data) => {
      res.status(200).send({
        message: "Created post",
        data: data,
      });
    })
    .catch((error) => {
      next(error);
    });
};

exports.updatePostContent = (req, res, next) => {
  //TODO: LATER, make sure to use $pull method for when an element is removed from an array
  // Update post
  const id = req.params.id;
  const userId = req.userId;
  const {
    title, // USER INPUT
    content, // USER INPUT
  } = req.body;

  //TODO: VALIDATE
  //TODO: saving image

  //? get user if author, and admin can delete anything lol
  const isAdmin = roles.includes(ROLES[0]);
  const isAuthor = roles.includes(ROLES[2]);
  let isLoggedMatchesPostCreator = false;
  Post.findById(id)
    .then((post) => {
      if (!post) {
        return res.status(404).send({
          message: "The post being updated doesn't exist.",
        });
      }
      isLoggedMatchesPostCreator = post.author.toString() === userId;
      const canBeUpdated =
        (isAuthor && isLoggedMatchesPostCreator) || isAdmin;
      if (canBeUpdated) {
        post.title = title || post.title;
        post.content = content || post.content;
        let wordCount = 0;
        wordCount = title.length + content.introduction.length;
        const sections = content.sections;
        for (let i = 0; i < sections.length; i++) {
          wordCount +=
            sections[i].body.length + sections[i].heading.length;
        }
        wordCount += content.conclusion.length;
        post.readTime = wordCount / 200;
        post.status = "draft";
        // Save Tutorial in the database
        post
          .save()
          .then((data) => {
            res.status(200).send({
              message: "Updated post",
              data: data,
            });
          })
          .catch((error) => {
            next(error);
          });
      } else {
        return res.status(403).send({
          message:
            "You don't have enough permission to delete this post",
        });
      }
    })
    .catch((error) => {
      next(error);
    });
};

exports.deletePost = (req, res) => {
  const postId = req.params.id;
  const roles = req.roles;
  const userId = req.userId;

  // get user if author, and admin can delete anything lol
  const isAdmin = roles.includes(ROLES[0]);
  const isAuthor = roles.includes(ROLES[2]);
  let isLoggedMatchesPostCreator = false;
  Post.findById(postId)
    .then((data) => {
      if (!data) {
        return res
          .status(404)
          .send({ message: "Post cannot be found" });
      }
      isLoggedMatchesPostCreator = data.author.toString() === userId;
    })
    .catch((error) => {
      next(error);
    });
  const canBeDeleted =
    (isAuthor && isLoggedMatchesPostCreator) || isAdmin;
  if (canBeDeleted) {
    Post.findByIdAndDelete(postId)
      .then((result) => {
        return res
          .status(200)
          .send({ message: "Deleted post", data: result });
      })
      .catch((error) => {
        next(error);
      });
  } else {
    return res.status(403).send({
      message: "You don't have enough permission to delete this post",
    });
  }
};

exports.getAllPosts = (req, res, next) => {
  Post.find()
    .populate("author", "name email")
    .then((data) => {
      if (data) {
        return res.status(200).send({
          message: "Here you go",
          data: data,
        });
      }
      next(new Error("Fetching posts returned nothing?"));
    })
    .catch((error) => {
      next(error);
    });
};

exports.getPostById = (req, res, next) => {
  Post.findById(req.params.id)
    .populate("author", "name email")
    .then((data) => {
      if (data) {
        return res.status(200).send({
          message: "Here you go",
          data: data,
        });
      }
      next(new Error("Fetching post returned nothing?"));
    })
    .catch((error) => {
      next(error);
    });
};
