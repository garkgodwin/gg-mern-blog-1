//! CATEGORIES AND TAGS SHOULD BE HIDDEN IN SEARCH RESULTS
//TODO: make in frontend that it will not show in search results to avoid crawlers see these as duplicates
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      slug: { type: String, required: true, unique: true },
      description: { type: String },
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Category = mongoose.model("category", schema);
  return Category;
};
