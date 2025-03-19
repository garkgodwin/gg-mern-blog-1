import React from "react";

const FormInput = ({
  id = "",
  label = "todo label",
  type = "text",
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
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
