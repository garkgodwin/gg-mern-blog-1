import React, { useEffect, useRef, useState } from "react";
import "./input.css";

const FormInput = ({
  id = "",
  label = "todo label",
  type = "text",
  rows = 4,
  cols = 40,
  required = false,
  flexDirection = "col", // col, row, colRev, rowRev
  value,
  handleChange,
  fileInfo = null,
}) => {
  // files data
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const allowedTypes = ["image/jpg", "image/jpeg", "image/png"];

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];

    if (allowedTypes.includes(droppedFile.type)) {
      if (droppedFile) {
        setPreview(URL.createObjectURL(droppedFile)); // for preview only
        handleChange(droppedFile);
      }
    } else {
      handleChange(null);
      setPreview(null);
    }
  };
  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (allowedTypes.includes(file.type)) {
        if (file) {
          setPreview(URL.createObjectURL(file)); // for preview only
          handleChange(file);
        }
      } else {
        handleChange(null);
        setPreview(null);
      }
    }
  };
  const handleClickDropZone = () => {
    document.getElementById(id).click();
  };

  const handleClearImage = (e) => {
    e.preventDefault();
    setPreview(null);
    handleChange(null);
    fileInputRef.current?.focus();
  };

  useEffect(() => {
    if (!value) {
      setPreview(null);
      document.getElementById(id).files = null;
      document.getElementById(id).value = "";
    }
  }, [value]);
  return (
    <div
      className={`form-input form-input-${type} form-input-${flexDirection}`}
    >
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          name={id}
          id={id}
          rows={rows}
          cols={cols}
          required={required}
          value={value}
          onChange={handleChange}
        />
      ) : type === "file" ? (
        <div className="form-input-image">
          {fileInfo.name !== "" ? (
            <div className="file-info">
              <span>{fileInfo.name}</span>
              <span>{fileInfo.size}</span>
              <span>{fileInfo.type}</span>
            </div>
          ) : (
            <div className="file-info">
              <span>Drop your files in the box</span>
            </div>
          )}
          <div
            ref={fileInputRef}
            className="preview"
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onClick={handleClickDropZone}
          >
            {preview && (
              <img
                className="preview-image"
                src={preview}
                alt="Preview"
              />
            )}
          </div>

          <input
            ref={fileInputRef}
            name={id}
            id={id}
            type="file"
            accept="image/*"
            required={required}
            onClick={handleChangeImage}
            onChange={handleChangeImage}
          />
          {value && (
            <button
              className="btn-file-clear"
              onClick={handleClearImage}
            >
              X
            </button>
          )}
        </div>
      ) : (
        <input
          name={id}
          id={id}
          type={type}
          required={required}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default FormInput;
