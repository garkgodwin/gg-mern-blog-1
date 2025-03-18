module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      fileName: { type: String, required: true },
      fileType: { type: String, required: true }, // e.g., image, video
      fileUrl: { type: String, required: true },
      altText: { type: String },
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Media = mongoose.model("media", schema);
  return Media;
};
