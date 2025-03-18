module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      username: { type: String, required: true, unique: true },
      password: { type: String, required: true }, // Hashed password
      bio: { type: String },
      profilePicture: { type: String }, // URL of the profile picture
      roles: [
        {
          type: String,
          enum: ["admin", "moderator", "author", "subscriber"],
          default: "subscriber",
        },
      ],
    },
    { timestamps: true }
  );

  // switching _id to id;
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model("user", schema);
  return User;
};
