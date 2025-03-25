import React from "react";
import "./button.css";

/*
  type -> submit, reset
*/
const FormButton = ({
  type = "submit",
  size = "md",
  outlined = false,
  disabled = false,
  className = "",
  handleClick,
  children,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`frm-btn ${
        outlined ? "frm-btn-outlined" : ""
      } frm-btn-${size} ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default FormButton;
