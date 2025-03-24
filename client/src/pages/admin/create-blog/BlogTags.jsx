import React, { useEffect, useState } from "react";
import FormField from "./../../../containers/form/FormField";
import Flex from "../../../containers/flex/Flex";
import Label from "./../../../components/inputs/Label";
import InputText from "../../../components/inputs/InputText";
import FormButton from "../../../components/buttons/FormButton";
const BlogTags = ({ tags, handleUpdateTags }) => {
  const [err, setErr] = useState("");
  const [xTags, setXTags] = useState([]);
  const [text, setText] = useState("");
  const [toUpdate, setToUpdate] = useState();
  const [btnAddText, setBtnAddText] = useState("Add");
  const handleAddClick = (e) => {
    e.preventDefault();
    if (text === "") {
      setErr("Cannot be empty");
      return;
    }
    if (btnAddText === "Add") {
      handleAdd();
    } else {
      handleUpdate();
    }
  };

  const handleAdd = () => {
    setErr("");
    let exist = false;
    for (let i = 0; i < xTags.length && exist === false; i++) {
      if (xTags[i] === text) {
        exist = true;
      }
    }
    if (exist) {
      setErr("You already added this tag");
    } else {
      setXTags([...xTags, text]);
      setText("");
    }
  };

  const handleUpdate = () => {
    setErr("");
    let exist = false;
    for (let i = 0; i < xTags.length; i++) {
      if (i !== toUpdate && xTags[i] === text) {
        exist = true;
      }
    }
    if (exist) {
      setErr("You already added this tag");
    } else {
      setXTags((prev) =>
        prev.map((item, index) => (index === toUpdate ? text : item))
      );
    }
    setText("");
    setBtnAddText("Add");
    setToUpdate();
  };
  const handleClickToUpdate = (index) => {
    setToUpdate(index);
    setBtnAddText("Update");
    setText(xTags[index]);
  };
  const handleRemove = (index) => {
    setBtnAddText("Add");
    setToUpdate();
    setText("");
    setXTags((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    console.log(xTags);
    handleUpdateTags(xTags);
  }, [xTags]);
  return (
    <FormField flow="row" className="form-field-blog-tags">
      <Label>Tags: </Label>
      <InputText
        type="text"
        value={text}
        handleChange={(e) => {
          setText(e.target.value);
        }}
      />
      <FormButton
        size="sm"
        className="btn-add-tag"
        handleClick={handleAddClick}
      >
        {btnAddText}
      </FormButton>
      <Flex flow="row" type="ul" className="tag-list">
        {xTags.map((tag, i) => {
          return (
            <li
              key={i}
              className={`tag-list-item ${
                toUpdate === i ? "tli-selected" : ""
              }`}
            >
              <span
                onClick={(e) => {
                  handleClickToUpdate(i);
                }}
              >
                {tag}
              </span>
              <div className="li-actions">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleRemove(i);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          );
        })}
      </Flex>
      <span className="tag-input-err">{err}</span>
    </FormField>
  );
};

export default BlogTags;
