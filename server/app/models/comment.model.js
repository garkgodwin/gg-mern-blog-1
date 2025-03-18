module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: true,
      },
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      commentBody: { type: String, required: true },
      approvalStatus: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Comment = mongoose.model("comment", schema);
  return Comment;
};
