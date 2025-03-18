import React from "react";
import "./Section.css";

const Section = ({
  title = "",
  subTitle = "",
  className = "",
  children,
}) => {
  return (
    <section className={`section ${className}`}>
      <div className="section-header">
        <h2 className="title">{title}</h2>
        <p className="sub-title">{subTitle}</p>
      </div>
      <div className="section-contents">{children}</div>
    </section>
  );
};

export default Section;
