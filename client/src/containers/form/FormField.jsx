import React from "react";
import Flex from "../flex/Flex";

const FormField = ({
  flow = "col",
  flexBasis = "auto",
  justifyContent = "start",
  error = "",
  className = "",
  children,
}) => {
  return (
    <Flex
      flow={flow}
      flexBasis={flexBasis}
      className={`form-field form-field-justify-${justifyContent} ${className}`}
    >
      {children}
      {error !== "" && <span className="error-field">{error}</span>}
    </Flex>
  );
};

export default FormField;
