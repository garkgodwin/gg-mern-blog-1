module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      email: { type: String, required: true, unique: true },
      name: { type: String },
      subscriptionDate: { type: Date, default: Date.now },
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Subscriber = mongoose.model("subscriber", schema);
  return Subscriber;
};
