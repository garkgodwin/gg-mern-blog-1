//! CATEGORIES AND TAGS SHOULD BE HIDDEN IN SEARCH RESULTS
//TODO: make in frontend that it will not show in search results to avoid crawlers see these as duplicates
module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true, unique: true },
      slug: { type: String, required: true, unique: true },
    },
    { timestamps: true }
  );

  // switching _id to id when returning to response
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Tag = mongoose.model("tag", schema);
  return Tag;
};
