const cloudinary = require("../config/upload.config");

exports.uploadImage = async (req, res) => {
  if (!req.files || !req.files?.image) {
    return res.status(400).send({ error: "No file uploaded" });
  }
  const file = req.files.image; // Get the uploaded file - req.files.[name from frontend] should match whatever is added in FormData
  await cloudinary.uploader
    .upload(file.tempFilePath, {
      folder: "blog-images", // Cloudinary folder
    })
    .then((result) => {
      res.send({ imageUrl: result.secure_url }); // Send Cloudinary URL as response
    })
    .catch((err) => {
      res.status(500).send({ message: "Upload failed" });
    });
};
