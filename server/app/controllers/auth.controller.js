const config = require("../config/auth.config");
const db = require("../models");
const User = db.users;
const ROLES = db.ROLES;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  const user = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
    bio: req.body.bio,
  });

  console.log("Signup is running");
  console.log("Roles", req.body.roles);
  user
    .save()
    .then((data) => {
      console.log("THEN RUNNING");
      if (req.body.roles || req.body.roles !== undefined) {
        console.log("ROLES EXIST?");
        ///checks all the req.body.roles elements agains the ROLES in server
        const allInArray = req.body.roles.every((t) =>
          ROLES.includes(t)
        );
        if (allInArray) {
          data.roles = req.body.roles;
          data
            .save()
            .then(() => {
              res.send({
                message: "User was registered successfully!",
              });
            })
            .catch((err) => {
              if (err) {
                res.status(500).send({ message: err });
                return;
              }
            });
        } else {
          res.status(500).send({ message: "Role does not exist." });
        }
      } else {
        console.log("ELSE RUNNING");
        data.roles = [ROLES[3]]; // subscriber
        console.log(data.roles);
        data
          .save()
          .then(() => {
            res.status(200).send({
              message: "User was registered successfully!",
            });
          })
          .catch((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
          });
      }
    })
    .catch((err) => {
      console.log("Error running: ", err);
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });
};

exports.signin = (req, res) => {
  User.findOne({
    username: req.body.username,
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({ message: "Invalid Password!" });
      }

      const refreshToken = jwt.sign(
        { id: user.id },
        config.secret_refresh,
        {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: "30d", // 30 days
        }
      );

      const accessToken = jwt.sign(
        { id: user.id },
        config.secret_access,
        {
          algorithm: "HS256",
          allowInsecureKeySizes: true,
          expiresIn: "15m", // 15 minutes
        }
      );

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].toUpperCase());
      }

      req.session.refreshToken = refreshToken;

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: accessToken,
      });
    })
    .catch((error) => {
      console.log("ERROR", error);
      res.status(500).send({ message: error });
    });
};

// Refresh route
exports.refreshAccessToken = (req, res) => {
  // refresh token will be verified in middleware
  const id = req.userId;
  try {
    const accessToken = jwt.sign({ id: id }, config.secret_access, {
      algorithm: "HS256",
      allowInsecureKeySizes: true,
      expiresIn: "15m", // 15 minutes
    });
    User.findById(id).then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
        accessToken: accessToken,
      });
    });
  } catch (err) {
    res.status(403).json({ message: "Invalid refresh token" });
  }
};

exports.signout = async (req, res) => {
  try {
    req.session = null;
    return res
      .status(200)
      .send({ message: "You've been signed out!" });
  } catch (err) {
    this.next(err);
  }
};

exports.createAdminOnStart = () => {
  const user = new User({
    name: "Gark Godwin Duque",
    username: "garkgodwin",
    email: "garkgodwinduque@gmail.com",
    password: bcrypt.hashSync("admin", 8),
    bio: "I am the admin :)",
    roles: ["admin"],
  });
  User.findOne({ username: user.username }).then((res) => {
    if (!res) {
      user.save().then(() => {
        console.log("SERVER: Default Admin created.");
      });
    }
    console.log("SERVER: Default user check completed.");
  });
};
