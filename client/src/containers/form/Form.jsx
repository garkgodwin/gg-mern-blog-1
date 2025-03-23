import React from "react";
import "./form.css";

const Form = ({
  name = "",
  width = "auto",
  header,
  desc,
  handleSubmit,
  children,
}) => {
  return (
    <div className={`form-box form-box-${name} form-box-w${width}`}>
      <h3 className="form-header">{header}</h3>
      <p className="form-desc">{desc}</p>
      <form onSubmit={handleSubmit} className="form">
        {children}
      </form>
    </div>
  );
};

export default Form;
