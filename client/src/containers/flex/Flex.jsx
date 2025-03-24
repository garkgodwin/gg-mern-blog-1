import React from "react";
import "./flex.css";
const Flex = ({
  type = "div",
  flow = "row",
  flexBasis = "auto",
  className = "",
  children,
}) => {
  if (type === "ul") {
    return (
      <ul
        className={`flex-box flex-box-${flow} flex-basis-${flexBasis} ${className}`}
      >
        {children}
      </ul>
    );
  }
  return (
    <div
      className={`flex-box flex-box-${flow} flex-basis-${flexBasis} ${className}`}
    >
      {children}
    </div>
  );
};

export default Flex;
