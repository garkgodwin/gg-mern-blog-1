import React from "react";
import "./input-text.css";

const InputText = ({ id, type, required, value, handleChange }) => {
  return (
    <input
      className="input-text"
      name={id}
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputText;
