const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models/index.js");
const User = db.users;
const ROLES = db.ROLES;

verifyToken = (req, res, next) => {
  let token = req.session.refreshToken;
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  jwt.verify(token, config.secret_refresh, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    req.roles = [];
    next();
  });
};

isAdmin = (req, res, next) => {
  User.findById(req.userId).then((user) => {
    const checkRole = user.roles.includes(ROLES[0]);
    if (checkRole) {
      req.roles.push(ROLES[0]);
      next();
      return;
    }
    res.status(403).send({ message: "Require Admin Role!" });
    return;
  });
};

isModerator = (req, res, next) => {
  User.findById(req.userId).then((user) => {
    const checkRole = user.roles.includes(ROLES[1]);
    if (checkRole) {
      req.roles.push(ROLES[1]);
      next();
      return;
    }
    res.status(403).send({ message: "Require Moderator Role!" });
    return;
  });
};

isAuthor = (req, res, next) => {
  User.findById(req.userId).then((user) => {
    const checkRole = user.roles.includes(ROLES[2]);
    if (checkRole) {
      req.roles.push(ROLES[2]);
      next();
      return;
    }
    res.status(403).send({ message: "Require Author Role!" });
    return;
  });
};

isSubscriber = (req, res, next) => {
  User.findById(req.userId).then((user) => {
    const checkRole = user.roles.includes(ROLES[3]);
    if (checkRole) {
      req.roles.push(ROLES[3]);
      next();
      return;
    }
    res.status(403).send({ message: "Require Subscriber Role!" });
    return;
  });
};

isAuthorOrAdmin = (req, res, next) => {
  User.findById(req.userId).then((user) => {
    const checkRole1 = user.roles.includes(ROLES[0]);
    const checkRole2 = user.roles.includes(ROLES[2]);
    if (checkRole1) {
      req.roles.push(ROLES[0]);
      next();
      return;
    }
    if (checkRole2) {
      req.roles.push(ROLES[2]);
      next();
      return;
    }
    res
      .status(403)
      .send({ message: "Require Author Or Admin Role!" });
    return;
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
  isAuthor,
  isSubscriber,
  isAuthorOrAdmin,
};
module.exports = authJwt;
