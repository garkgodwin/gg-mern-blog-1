import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./create-blog.css";
import { createBlogIds } from "../../../utils/formIds";

import { useDispatch } from "react-redux";

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
import BlogTags from "./BlogTags";
import useBlog from "../../../hooks/useBlog";

const initialState = {
  title: "",
  slug: "",
  content: [
    {
      heading: "",
      body: "",
    },
  ],
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
  const blog = useBlog();
  const { data } = blog;
  const dispatch = useDispatch();
  const sanitize = DOMPurify.sanitize;
  const [fileInfo, setFileInfo] = useState({
    name: "",
    size: "",
    type: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    blog.create();
  };

  //resets the fileds
  const handleReset = (e) => {
    e.preventDefault();
    data.reset();
    setFileInfo({
      name: "",
      size: "",
      type: "",
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
              value={data.title}
              handleChange={(e) => {
                blog.updateField("title", e.target.value);
              }}
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
              value={data.slug}
              handleChange={(e) => {
                blog.updateField("slug", e.target.value);
              }}
            />
          </FormField>
          <BlogContentFields blog={blog} />
          <BlogTags blog={blog} />
          {/* <BlogCategories blog={blog} /> */}
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
