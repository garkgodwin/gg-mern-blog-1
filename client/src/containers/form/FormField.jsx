import React from "react";
import Flex from "../flex/Flex";

const FormField = ({
  flow = "col",
  flexBasis = "auto",
  className = "",
  children,
}) => {
  return (
    <Flex
      flow={flow}
      flexBasis={flexBasis}
      className={`form-field ${className}`}
    >
      {children}
    </Flex>
  );
};

export default FormField;
