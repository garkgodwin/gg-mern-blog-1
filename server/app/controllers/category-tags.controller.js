const db = require("../models");
const Category = db.categories;
const Tag = db.tags;

exports.createCategoryOnStart = () => {
  const category = new Category({
    name: "Technologies",
    slug: "technologies",
    description:
      "Stay ahead of the curve with the latest tech trends, gadget reviews, software tutorials, and insights into AI, cybersecurity, and emerging innovations.",
  });
  Category.findOne({ name: category.name }).then((res) => {
    if (!res) {
      category.save().then(() => {
        console.log("SERVER: Default category created.");
      });
    }
    console.log("SERVER: Default category check completed.");
  });
};

exports.createTagOnStart = () => {
  const tag = new Tag({
    name: "technology",
    slug: "technology",
    description:
      "Stay ahead of the curve with the latest tech trends, gadget reviews, software tutorials, and insights into AI, cybersecurity, and emerging innovations.",
  });
  Tag.findOne({ name: tag.name }).then((res) => {
    if (!res) {
      tag.save().then(() => {
        console.log("SERVER: Default tag created.");
      });
    }
    console.log("SERVER: Default tag check completed.");
  });
};
