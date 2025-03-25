import React, { useState, useEffect } from "react";
import FormField from "../../../containers/form/FormField";
import Label from "../../../components/inputs/Label";
import InputText from "../../../components/inputs/InputText";
import InputTextArea from "../../../components/inputs/InputTextArea";
import Flex from "../../../containers/flex/Flex";

const BlogContent = ({ blog }) => {
  return (
    <FormField className="blog-content-fields">
      <Label htmlFor={`form-blog-content-section-text-${0}`}>
        Content
      </Label>

      {blog.data.content.map((sect, i) => {
        return (
          <div key={i} className="blog-content-field">
            <Flex flow="row" flexBasis="auto">
              <Label
                htmlFor={`form-blog-content-section-text-${i}`}
                isMain={false}
              >
                Section {i + 1} Header:
              </Label>
              <InputText
                id={`form-blog-content-section-text-${i}`}
                value={sect.heading}
                handleChange={(e) => {
                  blog.updateContent(i, "heading", e.target.value);
                }}
              />
            </Flex>
            <Flex flow="row">
              <Label
                htmlFor={`form-blog-content-section-textarea-${i}`}
                isMain={false}
              >
                Section {i + 1} Body:
              </Label>
              <InputTextArea
                id={`form-blog-content-section-textarea-${i}`}
                value={sect.body}
                handleChange={(e) => {
                  blog.updateContent(i, "body", e.target.value);
                }}
              />
            </Flex>
          </div>
        );
      })}
      <button onClick={(e) => blog.addContent()}>
        Add New Section
      </button>
    </FormField>
  );
};

export default BlogContent;
