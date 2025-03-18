// components/HeroSection.jsx
import React from "react";
import "./HeroSection.css";
import { NavLink } from "react-router";

const HeroSection = ({
  heading,
  subTitle,
  page = "home",
  btn = { txt: "", to: "/" },
}) => {
  const handleLinkClick = (e) => {
    if (btn.to.startsWith("#")) {
    }
  };
  return (
    <section className={`hero-section hero-section-${page}`}>
      <div className="hero-content">
        <h1 className="hero-heading">{heading}</h1>
        <p className="hero-subtitle">{subTitle}</p>
        <NavLink
          to={btn.to}
          className="hero-btn"
          onClick={handleLinkClick}
        >
          {btn.txt}
        </NavLink>
      </div>
    </section>
  );
};

export default HeroSection;
