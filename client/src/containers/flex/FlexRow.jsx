import React from "react";
import "./flex.css";
const FlexRow = ({
  reverse = false,
  flexBasis = "auto",
  children,
}) => {
  return (
    <div
      className={`box box-row ${
        reverse ? "box-row-reverse" : ""
      } flex-basis-${flexBasis}`}
    >
      {children}
    </div>
  );
};

export default FlexRow;
