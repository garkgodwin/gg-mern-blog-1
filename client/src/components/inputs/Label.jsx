import React from "react";

const Label = ({ htmlFor, isMain = true, children }) => {
  return (
    <label
      className={`label ${isMain ? "label-main" : "label-sub"}`}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

export default Label;
