import React from "react";
import "./input-text.css";

const InputCheckbox = ({
  id,
  type,
  required,
  value,
  handleChange,
}) => {
  return (
    <input
      className="input-checkbox"
      name={id}
      id={id}
      type={type}
      required={required}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputCheckbox;
