import React from "react";
import "./flex.css";
const Flex = ({
  flow = "row",
  flexBasis = "auto",
  className = "",
  children,
}) => {
  console.log(children);
  return (
    <div
      className={`flex-box flex-box-${flow} flex-basis-${flexBasis} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
