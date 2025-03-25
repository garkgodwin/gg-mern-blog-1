import { useState } from "react";
import {
  sanitizeArray,
  sanitizeObject,
  sanitizeText,
} from "../utils/sanitize";
import { useDispatch } from "react-redux";
import { createBlogThunk } from "../features/blogs/blogSlice";

const defaultData = {
  title: "",
  slug: "",
  content: [{ heading: "", body: "" }],
  summary: "",
  coverImage: null,
  tags: [],
  categories: {
    recipeType: "",
    preference: "",
    difficulty: "",
    method: "",
    cuisine: "",
    theme: "",
    blogType: "",
  },
};
const initialTagState = {
  button: "Add",
  text: "",
  index: null,
};

const useBlog = (initialData = defaultData) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(initialData);
  const [error, setError] = useState({
    title: "",
    slug: "",
    tag: "",
    content: "",
  });
  const [tag, setTag] = useState(initialTagState);

  const updateField = (field, value) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateCategory = (key, value) => {
    setData((prev) => ({
      ...prev,
      categories: {
        ...prev.categories,
        [key]: value,
      },
    }));
  };

  //? CONTENT INFO
  const updateContent = (index, key, value) => {
    setError({
      ...error,
      content: "",
    });
    const updatedContent = data.content.map((item, i) =>
      i === index ? { ...item, [key]: value } : item
    );
    setData((prev) => ({ ...prev, content: updatedContent }));
  };
  const addContent = () => {
    setError({
      ...error,
      content: "",
    });
    setData((prev) => ({
      ...prev,
      content: [...prev.content, { heading: "", body: "" }],
    }));
  };
  const removeContent = (index) => {
    setError({
      ...error,
      content: "",
    });
    if (data.content.length === 1) {
      setError({
        ...error,
        content: "You cannot leave the content empty.",
      });
      return;
    }
    setData((prev) => ({
      ...prev,
      content: prev.content.filter((_, i) => i !== index),
    }));
  };

  //? TAG INFO
  const typeTag = (value) => {
    clearTagError();
    setTag({
      ...tag,
      text: value,
    });
  };
  const clearTypeTagText = () => {
    setTag(initialTagState);
  };
  const addTag = () => {
    const newTag = tag.text;
    if (!isTagValid(newTag)) {
      return;
    }
    setError({
      ...error,
      tag: "",
    });
    let exist = false;
    const tags = data.tags;
    for (let i = 0; i < tags.length && exist === false; i++) {
      if (tags[i] === newTag) {
        exist = true;
      }
    }
    console.log("ADD TAG", exist);
    if (exist) {
      setError({ ...error, tag: "You already added this tag." });
    } else {
      setData((prev) => ({ ...prev, tags: [...prev.tags, newTag] }));
    }

    clearTypeTagText();
  };
  const updateTag = () => {
    const { index, text } = tag;
    setError({
      ...error,
      tag: "",
    });
    if (!isTagValid(text)) {
      setTag(initialTagState);
      return;
    }
    let exist = false;
    const tags = data.tags;
    for (let i = 0; i < tags.length; i++) {
      if (i !== index && tags[i] === text) {
        exist = true;
      }
    }
    if (exist) {
      setError({
        ...error,
        tag: "You already added this tag",
      });
    } else {
      setData((prev) => ({
        ...prev,
        tags: prev.tags.map((item, i) => (index === i ? text : item)),
      }));
    }
    clearTypeTagText();
  };
  const selectTagToUpdate = (index) => {
    setError({
      ...error,
      tag: "",
    });
    setTag({
      ...tag,
      button: "Update",
      text: data.tags[index],
      index: index,
    });
  };
  const removeTag = (index) => {
    setTag(initialTagState);
    setData((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index),
    }));
  };
  const clearTagError = () => {
    setError({
      ...error,
      tag: "",
    });
  };
  //internal
  const isTagValid = (tag) => {
    if (tag === "") {
      setError({
        ...error,
        tag: "Cannot be empty",
      });
      return false;
    }
    return true;
  };

  const reset = () => {
    setData(defaultData);
  };

  const create = async () => {
    let sanitizedData = data;
    sanitizedData = {
      ...sanitizedData,
      title: sanitizeText(sanitizedData.title),
      slug: sanitizeText(sanitizedData.slug),
      content: sanitizeArray(sanitizedData.content),
      summary: sanitizeText(sanitizedData.summary),
      tags: sanitizeArray(sanitizedData.tags),
      categories: sanitizeObject(sanitizedData.categories),
    };
    console.log("DATA: ", data);
    console.log("SANITIZED: ", sanitizedData);
    console.log("Is sanitized samedata: ", sanitizedData === data);
    const result = await dispatch(createBlogThunk(sanitizedData));
    console.log(result);
  };

  return {
    data,
    setData,
    error,
    tag,
    updateField,
    updateCategory,
    // contents
    updateContent,
    addContent,
    removeContent,
    // tags
    typeTag,
    clearTypeTagText,
    addTag,
    updateTag,
    selectTagToUpdate,
    removeTag,
    clearTagError,
    reset,
    create,
  };
};

export default useBlog;
