const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require("./tutorial.model.js")(mongoose);

db.users = require("./user.model.js")(mongoose);

db.posts = require("./post.model.js")(mongoose);
db.comments = require("./comment.model.js")(mongoose);
db.tags = require("./tag.model.js")(mongoose);
db.categories = require("./category.model.js")(mongoose);

db.analytics = require("./analytics.model.js")(mongoose);
db.media = require("./media.model.js")(mongoose);
db.subscribers = require("./subscriber.model.js")(mongoose);

db.ROLES = ["admin", "moderator", "author", "subscriber"]; //! DO NOT UPDATE THE POSITIONS OF THE ELEMENTS

module.exports = db;
