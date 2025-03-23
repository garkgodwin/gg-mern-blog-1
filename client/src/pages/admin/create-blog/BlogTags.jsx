import React, { useEffect, useState } from "react";
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
      const oldTags = xTags;
      oldTags[toUpdate] = text;
      setXTags(oldTags);
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
    const oldTags = xTags;
    oldTags.splice(index, 1);
    setXTags(oldTags);
  };

  useEffect(() => {
    handleUpdateTags(xTags);
  }, [xTags]);
  return (
    <div className="blog-tags">
      <div className="tag-input">
        <label>Tags</label>
        <div className="tag-input-box">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="btn-add-tag" onClick={handleAddClick}>
            {btnAddText}
          </button>
        </div>
        <span className="tag-input-err">{err}</span>
      </div>
      <ul className="tag-list">
        {tags.map((tag, i) => {
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
      </ul>
    </div>
  );
};

export default BlogTags;
