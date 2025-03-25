import axios from "./axios";

// set blog image
export const uploadBlogImage = async (data, headers) => {
  return await axios.post("/uploads", data, headers);
};
