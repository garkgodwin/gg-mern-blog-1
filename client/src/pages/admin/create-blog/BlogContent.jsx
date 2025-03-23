import React, { useState, useEffect } from "react";
import FormInput from "../../../components/inputs/FormInput";

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
    <div className="form-blog-content">
      <label>Content</label>
      <FormInput
        id="form-blog-content-introduction"
        required={true}
        label="Introduction"
        type="textarea"
        value={content.introduction}
        handleChange={handleChangeIntro}
      />
      <div className="form-blog-content-sections">
        <label>Sections</label>
        {xContent.sections.map((sect, i) => {
          return (
            <div key={i} className="form-blog-content-section">
              <FormInput
                id={`form-blog-content-section-text-${i}`}
                label="Header"
                type="text"
                value={sect.heading}
                handleChange={(e) => {
                  let newSection = xContent.sections;
                  newSection = newSection.map((item, index) =>
                    index === i ? e.target.value : item
                  );
                  setXContent({
                    ...xContent,
                    sections: newSection,
                  });
                }}
              />
              <FormInput
                id={`form-blog-content-section-textarea-${i}`}
                label="Body"
                type="textarea"
                value={sect.body}
              />
            </div>
          );
        })}
        <button onClick={handleAddNewSection}>Add New Section</button>
      </div>
      <FormInput
        id="form-blog-content-conclusion"
        required={true}
        label="Conclusion"
        type="textarea"
        value={content.conclusion}
        handleChange={handleChangeConc}
      />
    </div>
  );
};

export default BlogContent;
