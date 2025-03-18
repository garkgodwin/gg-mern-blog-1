import React from "react";

const SectionContent = ({
  className = "",
  position = "left",
  type = "text",
  children,
}) => {
  return (
    <div
      className={`section-content section-content-${position} section-content-${type} ${className}`}
    >
      {children}
    </div>
  );
};

export default SectionContent;
