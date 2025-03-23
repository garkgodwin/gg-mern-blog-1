import axios from "./axios";

// get categories
export const getCategories = async () => {
  return await axios.get("/blogs/categories");
};

// create blog post
export const createBlog = async (data) => {
  return await axios.post("/blogs", data);
};
