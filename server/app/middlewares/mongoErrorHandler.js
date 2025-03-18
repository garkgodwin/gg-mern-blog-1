const mongooseErrorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong";
  console.log(err);
  // ✅ Handle Mongoose Validation Errors
  if (err.name === "ValidationError") {
    statusCode = 400;
    const errors = Object.values(err.errors).map((el) => el.message);
    message = `Validation Error: ${errors.join(", ")}`;
  }

  // ✅ Handle Duplicate Key Error (E11000)
  else if (err.code === 11000) {
    statusCode = 400;
    const field = Object.keys(err.keyValue)[0]; // Get the field name
    message = `Duplicate field: ${field} already exists`;
  }

  // ✅ Handle Cast Errors (Invalid ObjectId)
  else if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path}: ${err.value}`;
  }

  res.status(statusCode).json({ success: false, message });
};

module.exports = mongooseErrorHandler;
