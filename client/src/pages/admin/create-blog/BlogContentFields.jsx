import React, { useState, useEffect } from "react";
import FormField from "../../../containers/form/FormField";
import Label from "../../../components/inputs/Label";
import InputText from "../../../components/inputs/InputText";
import InputTextArea from "../../../components/inputs/InputTextArea";
import Flex from "../../../containers/flex/Flex";

const BlogContent = ({ content, handleChangeContent }) => {
  const [xContent, setXContent] = useState(
    [{ heading: "", body: "" }] // {heading, body}
  );
  //section
  const handleAddNewSection = (e) => {
    e.preventDefault();
    setXContent((prev) => [...prev, { heading: "", body: "" }]);
  };

  useEffect(() => {
    handleChangeContent(xContent);
  }, [xContent]);

  return (
    <FormField className="blog-content-fields">
      <Label htmlFor="">Content</Label>

      {xContent.map((sect, i) => {
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
                  setXContent((prev) =>
                    prev.map((item, itemIndex) =>
                      itemIndex === i
                        ? { ...item, heading: e.target.value }
                        : item
                    )
                  );
                }}
              />
            </Flex>
            <Flex flow="row">
              <Label
                htmlFor={`form-blog-content-section-text-${i}`}
                isMain={false}
              >
                Section {i + 1} Body:
              </Label>
              <InputTextArea
                id={`form-blog-content-section-textarea-${i}`}
                value={sect.body}
                handleChange={(e) => {
                  setXContent((prev) =>
                    prev.map((item, itemIndex) =>
                      itemIndex === i
                        ? { ...item, body: e.target.value }
                        : item
                    )
                  );
                }}
              />
            </Flex>
          </div>
        );
      })}
      <button onClick={handleAddNewSection}>Add New Section</button>
    </FormField>
  );
};

export default BlogContent;
