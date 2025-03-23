import React, { useState, useEffect } from "react";
import FormInput from "../../../components/inputs/Input";
import FlexCol from "../../../containers/flex/FlexCol";
import FlexRow from "../../../containers/flex/FlexRow";
import FormField from "../../../containers/form/FormField";
import Label from "../../../components/inputs/Label";
import InputText from "../../../components/inputs/InputText";
import InputTextArea from "../../../components/inputs/InputTextArea";
import Flex from "../../../containers/flex/Flex";

const BlogContent = ({ content, handleChangeContent }) => {
  const [xContent, setXContent] = useState({
    introduction: "",
    sections: [{ heading: "", body: "" }], // {heading, body}
    conclusion: "",
  });
  const handleChangeIntro = (e) => {
    setXContent({
      ...xContent,
      introduction: e.target.value,
    });
  };
  const handleChangeConc = (e) => {
    setXContent({
      ...xContent,
      conclusion: e.target.value,
    });
  };

  //section
  const handleAddNewSection = (e) => {
    e.preventDefault();
    let newSection = xContent.sections;
    newSection.push({ heading: "", body: "" });
    setXContent({
      ...xContent,
      sections: newSection,
    });
  };

  useEffect(() => {
    handleChangeContent(xContent);
  }, [xContent]);

  return (
    <FormField className="blog-content-fields">
      <Label htmlFor="">Content</Label>

      {xContent.sections.map((sect, i) => {
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
                  let newSections = xContent.sections;
                  newSections = newSections.map((item, index) => {
                    if (index === i)
                      return { ...item, heading: e.target.value };
                    else return item;
                  });
                  setXContent({
                    ...xContent,
                    sections: newSections,
                  });
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
                  let newSections = xContent.sections;
                  newSections = newSections.map((item, index) => {
                    if (index === i)
                      return { ...item, body: e.target.value };
                    else return item;
                  });
                  setXContent({
                    ...xContent,
                    sections: newSections,
                  });
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
