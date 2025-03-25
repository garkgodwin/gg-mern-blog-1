import React, { useRef, useState, useEffect } from "react";
import "./input-file.css";
import Flex from "../../containers/flex/Flex";
import { shortenFilename } from "./../../utils/formatText";
import FormButton from "../buttons/FormButton";

const InputFile = ({ id, value, handleChange, required = true }) => {
  // files data
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [fileInfo, setFileInfo] = useState({
    name: "",
    size: "",
    type: "",
  });

  const allowedTypes = [
    "image/jpg",
    "image/jpeg",
    "image/png",
    "image/webp",
  ];

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (allowedTypes.includes(droppedFile.type)) {
      document.getElementById(id).files = e.dataTransfer.files;
      setPreview(URL.createObjectURL(droppedFile)); // for preview only
      handleChange(droppedFile);
      setFileInfo({
        name: shortenFilename(droppedFile.name),
        size: (droppedFile.size / 1024).toFixed(2) + " KB",
        type: droppedFile.type,
      });
    } else {
      // handleChange(null);
      setPreview(null);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (allowedTypes.includes(file.type)) {
        if (file) {
          setFileInfo({
            name: shortenFilename(file.name),
            size: (file.size / 1024).toFixed(2) + " KB",
            type: file.type,
          });
          setPreview(URL.createObjectURL(file)); // for preview only
          handleChange(file);
        }
      } else {
        setPreview(null);
      }
    }
  };
  const handleClickDropZone = () => {
    document.getElementById(id).click();
  };

  const handleClearImage = (e) => {
    e.preventDefault();
    document.getElementById(id).value = "";
    setFileInfo({
      name: "",
      size: "",
      type: "",
    });
    setPreview(null);
    // handleChange(null);
    fileInputRef.current?.focus();
  };

  return (
    <div className="form-input-file">
      <Flex className="form-input-fle-details">
        {fileInfo.name !== "" ? (
          <div className="file-info">
            <span>Name: {fileInfo.name}</span>
            <span>Size: {fileInfo.size}</span>
            <span>Type: {fileInfo.type}</span>
          </div>
        ) : (
          !preview && <span>Drop your files here</span>
        )}
        {preview && (
          <FormButton
            className="btn-file-clear"
            size="sm"
            outlined={true}
            handleClick={handleClearImage}
          >
            Clear
          </FormButton>
        )}
      </Flex>
      <div
        ref={fileInputRef}
        className={`preview ${isDragging ? "preview-dragging" : ""}`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={handleClickDropZone}
      >
        {!preview && <span>Drop your files here</span>}
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
    </div>
  );
};

export default InputFile;
