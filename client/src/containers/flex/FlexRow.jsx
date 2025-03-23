import React from "react";
import "./flex.css";
const FlexRow = ({ reverse = false, children }) => {
  return (
    <div
      className={`box box-row ${reverse ? "box-row-reverse" : ""}`}
    >
      {children}
    </div>
  );
};

export default FlexRow;
