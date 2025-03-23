import React from "react";
import "./flex.css";
const FlexCol = ({ reverse = false, children }) => {
  return (
    <div
      className={`box box-col ${reverse ? "box-col-reverse" : ""}`}
    >
      {children}
    </div>
  );
};

export default FlexCol;
