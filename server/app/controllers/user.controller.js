const db = require("../models");
const User = db.users;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

/*
  ? Admin can do the following:
  - Get all users
  - Get user by ID
  - and all functions other users can do
*/
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
exports.getUsers = (req, res) => {
  User.find({}, "name username email bio roles").then((data) => {
    res.status(200).send({
      message: "Here's your users",
      users: data,
    });
  });
};
exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.findById(id, "name username email bio roles").then((data) => {
    res.status(200).send({
      message: "Here's your user",
      user: data,
    });
  });
};

/*
  ? Moderators can do the following
  - check all posts
  - approve post to published
*/
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

/*
  ? Authors can do the following
  - check all posts
  - check created posts
  - create post
  - add comment
  - 
*/
exports.authorBoard = (req, res) => {
  res.status(200).send("Author Content.");
};
exports.subscriberBoard = (req, res) => {
  res.status(200).send("Subscriber Content.");
};
