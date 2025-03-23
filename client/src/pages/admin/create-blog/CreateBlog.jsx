import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./create-blog.css";
import { createBlogIds } from "../../../utils/formIds";

import {
  sanitizeArray,
  sanitizeObject,
} from "./../../../utils/sanitize";
import { useDispatch } from "react-redux";
import { createBlogThunk } from "./../../../features/blogs/blogSlice";

import Page from "../../../containers/page/Page";
import Form from "./../../../containers/form/Form";
import FormFields from "./../../../containers/form/FormFields";
import FormActions from "./../../../containers/form/FormActions";
import FormButton from "./../../../components/buttons/FormButton";
import FormField from "../../../containers/form/FormField";
import Label from "./../../../components/inputs/Label";
import InputText from "../../../components/inputs/InputText";
import AddTags from "./BlogTags";
import BlogCategories from "./BlogCategories";
import BlogContentFields from "./BlogContentFields";
import Flex from "../../../containers/flex/Flex";

const initialState = {
  title: "",
  slug: "",
  content: "",
  summary: "",
  coverImage: null, //TODO: later
  tags: [],
  categories: {
    recipeType: "",
    preference: "",
    difficulty: "",
    method: "",
    cuisine: "",
    theme: "",
    blogType: "",
  }, //something bout food
};
const CreateBlog = () => {
  const dispatch = useDispatch();
  const sanitize = DOMPurify.sanitize;
  const [formData, setFormData] = useState(initialState);
  const [fileInfo, setFileInfo] = useState({
    name: "",
    size: "",
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let sanitizedFormData = formData;
    sanitizedFormData = {
      ...sanitizedFormData,
      title: sanitize(formData.title),
      slug: sanitize(formData.slug),
      content: sanitize(formData.content),
      summary: sanitize(formData.summary),
      tags: sanitizeArray(formData.tags),
      categories: sanitizeObject(formData.categories),
    };
    const result = await dispatch(createBlogThunk(sanitizedFormData));
    console.log(result);
  };

  // handle change texts?
  const handleChange = (e) => {
    const name = e.target.name;
    const val = e.target.value;
    if (name === createBlogIds.TITLE) {
      setFormData({
        ...formData,
        title: val,
      });
    } else if (name === createBlogIds.SLUG) {
      setFormData({
        ...formData,
        slug: val,
      });
    } else if (name === createBlogIds.CONTENT) {
      setFormData({
        ...formData,
        content: val,
      });
    } else if (name === createBlogIds.SUMMARY) {
      setFormData({
        ...formData,
        summary: val,
      });
    }
  };
  // changing image
  const handleChangeImage = (file) => {
    const MAX_SIZE_MB = 5;
    const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
    setFileInfo({
      name: "",
      size: "",
      type: "",
    });

    if (!file) {
      setFormData({
        ...formData,
        coverImage: null,
      });
      return;
    }
    const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];

    setFileInfo({
      name: "",
      size: "",
      type: "",
    });

    if (!allowedTypes.includes(file.type)) {
      setFormData({
        ...formData,
        coverImage: null,
      });
      return;
    }
    if (file.size > MAX_SIZE_BYTES) {
      e.target.value = null;
      setFormData({
        ...formData,
        coverImage: null,
      });
      return;
    }
    setFileInfo({
      name: file.name,
      size: (file.size / 1024).toFixed(2).toString() + " KB",
      type: file.type,
    });

    setFormData({
      ...formData,
      coverImage: file,
    });
    console.log(file);
  };
  //resets the fileds
  const handleReset = (e) => {
    e.preventDefault();
    setFormData(initialState);
    setFileInfo({
      name: "",
      size: "",
      type: "",
    });
  };

  // for tgas
  const handleUpdateTags = (newTags) => {
    setFormData({
      ...formData,
      tags: newTags,
    });
  };
  // for cates
  const handleUpdateCategories = (newCats) => {
    setFormData({
      ...formData,
      categories: newCats,
    });
  };

  //content
  const handleChangeContent = (newContent) => {
    setFormData({
      ...formData,
      content: newContent,
    });
  };

  return (
    <Page>
      <Form
        handleSubmit={handleSubmit}
        header="Some form"
        desc="Some description"
      >
        <FormFields>
          <FormField>
            <Label htmlFor="create-blog-title">Title</Label>
            <InputText
              id="create-blog-title"
              type="text"
              value={formData.title}
              handleChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />
          </FormField>
          <FormField>
            <Label htmlFor="create-blog-slug">
              Slug (3 to 6 words. Short, meaningful, and easy to
              read.)
            </Label>
            <InputText
              id="create-blog-slug"
              type="text"
              value={formData.slug}
              handleChange={(e) =>
                setFormData({
                  ...formData,
                  slug: e.target.value,
                })
              }
            />
          </FormField>
          <BlogContentFields
            content={formData.content}
            handleChangeContent={handleChangeContent}
          />
        </FormFields>
        <FormActions flow="row">
          <FormButton
            type="reset"
            outlined={true}
            handleClick={handleReset}
          >
            Clear
          </FormButton>
          <FormButton>Submit</FormButton>
        </FormActions>
      </Form>
    </Page>
  );
};

export default CreateBlog;
