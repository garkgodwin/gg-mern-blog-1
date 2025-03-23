import React, { useEffect, useState } from "react";
import FormSelection from "../../../components/inputs/FormSelection";
import { getCategoriesThunk } from "../../../features/blogs/blogSlice";
import { useDispatch, useSelector } from "react-redux";

function formatGroupName(text) {
  return text
    .replace(/([A-Z])/g, " $1") // Add space before capital letters
    .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter
}
const BlogCategories = ({ categories, handleUpdateCategories }) => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog);
  const [selectedCategories, setSelectedCategories] = useState({
    recipeType: "",
    preference: "",
    difficulty: "",
    method: "",
    cuisine: "",
    theme: "",
    blogType: "",
  });

  useEffect(() => {
    const getCategoriesApi = async () => {
      await dispatch(getCategoriesThunk());
    };
    getCategoriesApi();
  }, []);
  useEffect(() => {
    handleUpdateCategories(selectedCategories);
  }, [selectedCategories]);

  const getSelected = (name) => {
    if (name === "recipeTypes") {
      return selectedCategories.recipeType;
    } else if (name === "dietaryPreferences") {
      return selectedCategories.preference;
    } else if (name === "cookingDifficultyAndTime") {
      return selectedCategories.difficulty;
    } else if (name === "cookingMethods") {
      return selectedCategories.method;
    } else if (name === "cuisines") {
      return selectedCategories.cuisine;
    } else if (name === "occasionsAndThemes") {
      return selectedCategories.theme;
    } else if (name === "otherBlogTypes") {
      return selectedCategories.blogType;
    } else {
      return "";
    }
  };
  const handleIt = (e) => {
    const name = e.target.name;
    const key =
      name === "recipeTypes"
        ? "recipeType"
        : name === "dietaryPreferences"
        ? "preference"
        : name === "cookingDifficultyAndTime"
        ? "difficulty"
        : name === "cookingMethods"
        ? "method"
        : name === "cuisines"
        ? "cuisine"
        : name === "occasionsAndThemes"
        ? "theme"
        : name === "otherBlogTypes"
        ? "blogType"
        : "";
    setSelectedCategories({
      ...selectedCategories,
      [key]: e.target.value,
    });
  };
  return (
    <div className="blog-categories">
      <label>Categories</label>
      <div className="blog-categories-box">
        {blog.categories &&
          Object.entries(blog.categories).map(
            ([groupName, categories]) => (
              <div key={groupName} className="blog-category">
                <span className="blog-group-name">
                  {formatGroupName(groupName)}
                </span>
                <FormSelection
                  id={groupName}
                  options={categories}
                  handleChange={handleIt}
                  selected={getSelected(groupName)}
                />
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default BlogCategories;
