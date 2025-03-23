import React, { useEffect, useRef, useState } from "react";
import "./input.css";
import FileInput from "./FileInput";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";

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
}) => {
  return (
    <div
      className={`form-input form-input-${type} form-input-${flexDirection}`}
    >
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <InputTextArea
          name={id}
          id={id}
          rows={rows}
          cols={cols}
          required={required}
          value={value}
          onChange={handleChange}
        />
      ) : type === "file" ? (
        <FileInput />
      ) : (
        <InputText
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
