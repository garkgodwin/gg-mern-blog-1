module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
      },
      pageViews: { type: Number, default: 0 },
      likes: { type: Number, default: 0 },
      shares: { type: Number, default: 0 },
      avgTimeSpent: { type: Number, default: 0 }, // in seconds
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Analytics = mongoose.model("analytics", schema);
  return Analytics;
};
