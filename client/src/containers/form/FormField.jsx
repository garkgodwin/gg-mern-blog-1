import React from "react";
import Flex from "../flex/Flex";

const FormField = ({
  flow = "col",
  flexBasis = "auto",
  justifyContent = "start",
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
    </Flex>
  );
};

export default FormField;
