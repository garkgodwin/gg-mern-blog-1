import React from "react";
import Flex from "../flex/Flex";

const FormFields = ({
  flow = "col",
  flexBasis = "auto",
  className = "",
  children,
}) => {
  return (
    <Flex
      flow={flow}
      flexBasis={flexBasis}
      className={`form-fields form-fields-${className}`}
    >
      {children}
    </Flex>
  );
};

export default FormFields;
