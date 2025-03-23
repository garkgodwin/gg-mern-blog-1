import React from "react";
import "./form.css";
import Flex from "./../flex/Flex";

const Form = ({
  flow = "col",
  flexBasis = "auto",
  header,
  desc,
  handleSubmit,
  className = "",
  children,
}) => {
  return (
    <Flex
      flow={flow}
      flexBasis={flexBasis}
      className={`form-box ${className}`}
    >
      <h3 className="form-header">{header}</h3>
      <p className="form-desc">{desc}</p>
      <form onSubmit={handleSubmit} className="form">
        {children}
      </form>
    </Flex>
  );
};

export default Form;
