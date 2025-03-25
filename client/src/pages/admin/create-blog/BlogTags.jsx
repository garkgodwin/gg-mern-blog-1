import React, { useState } from "react";
import FormField from "./../../../containers/form/FormField";
import Flex from "../../../containers/flex/Flex";
import Label from "./../../../components/inputs/Label";
import InputText from "../../../components/inputs/InputText";
import FormButton from "../../../components/buttons/FormButton";
const BlogTags = ({ blog }) => {
  const handleAddClick = (e) => {
    e.preventDefault();
    blog.clearTagError();
    if (blog.tag.button === "Add") {
      blog.addTag();
    } else {
      blog.updateTag();
    }
  };

  return (
    <FormField flow="row" className="form-field-blog-tags">
      <Label htmlFor="create-blog-tag-text">Tags: </Label>
      <InputText
        id="create-blog-tag-text"
        type="text"
        value={blog.tag.text}
        handleChange={(e) => {
          blog.typeTag(e.target.value);
        }}
      />
      <FormButton
        size="sm"
        className="btn-add-tag"
        handleClick={handleAddClick}
      >
        {blog.tag.button}
      </FormButton>
      <Flex flow="row" type="ul" className="tag-list">
        {blog.data.tags.map((tag, i) => {
          return (
            <li
              key={i}
              className={`tag-list-item ${
                blog.tag.index === i ? "tli-selected" : ""
              }`}
            >
              <span
                onClick={(e) => {
                  blog.selectTagToUpdate(i);
                }}
              >
                {tag}
              </span>
              <div className="li-actions">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    blog.removeTag(i);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          );
        })}
      </Flex>
      <span className="tag-input-err">{blog.error.tag}</span>
    </FormField>
  );
};

export default BlogTags;
