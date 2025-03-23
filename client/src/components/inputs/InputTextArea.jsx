import React from "react";
import "./input-text.css";

const InputTextArea = ({
  id,
  required,
  rows = 4,
  cols = 40,
  value,
  handleChange,
}) => {
  return (
    <textarea
      className="input-textarea"
      name={id}
      id={id}
      rows={rows}
      cols={cols}
      required={required}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputTextArea;
