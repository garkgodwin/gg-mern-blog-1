import React from "react";
import "./button.css";

const FormButton = ({ children }) => {
  return (
    <button className="frm-btn" type="submit">
      {children}
    </button>
  );
};

export default FormButton;
