import React, { useState } from "react";
import { NavLink } from "react-router";
import "./header.css";
import { LINKS } from "../../utils/navData";
import { useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${isAuthenticated ? "header-auth" : ""}`}
    >
      <div className="nav-brand">
        <NavLink to={LINKS.HOME} className="nav-logo">
          Your Cook
        </NavLink>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`hamburger ${menuOpen ? "open" : ""}`}
          ></span>
        </button>
      </div>

      {!isAuthenticated && (
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <NavLink
            to={LINKS.HOME}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to={LINKS.ABOUT}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
          <NavLink
            to={LINKS.BLOGS}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Blogs
          </NavLink>
          <NavLink
            to={LINKS.RECIPES}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Recipes
          </NavLink>
          <NavLink
            to={LINKS.CONTACT}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Let's Talk
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;
