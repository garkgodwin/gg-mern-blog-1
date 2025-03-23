module.exports = (mongoose) => {
  const User = require("./user.model");
  var schema = mongoose.Schema(
    {
      title: { type: String, required: true }, // different from seo title, will be the one to get the attention of the reader
      slug: { type: String, required: true, unique: true }, //unque, short text at the end of URL/endpoint for this post
      author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      content: {
        introduction: { type: String, required: true },
        sections: [
          {
            heading: { type: String, required: true },
            body: { type: String, required: true },
          },
        ],
        conclusion: { type: String, required: true },
      },
      categories: {
        recipeType: { type: String },
        preference: { type: String },
        difficulty: { type: String },
        method: { type: String },
        cuisine: { type: String },
        theme: { type: String },
        blogType: { type: String },
      },
      tags: [String],
      coverImage: { type: String }, // Image URL
      publishDate: { type: Date, default: Date.now },
      status: {
        type: String,
        enum: ["draft", "published", "archived"],
        default: "draft",
      },
      readTime: { type: Number, default: 5 }, //? Minutes // Estimated reading time in minutes - should be N of words/200
      seoTitle: { type: String }, // add to title tag, limit to 50 to 60 characters, use for search engines
      metaDescription: { type: String }, // add to meta description tag, limit to 150 to 160 characters
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Blog = mongoose.model("blog", schema);
  return Blog;
};
