import React from "react";
import "./form.css";

const Form = ({ header, desc, handleSubmit, children }) => {
  return (
    <div className="form-box">
      <h3 className="form-header">{header}</h3>
      <p className="form-desc">{desc}</p>
      <form onSubmit={handleSubmit} className="form">
        {children}
      </form>
    </div>
  );
};

export default Form;
