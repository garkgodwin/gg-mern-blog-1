import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router";
import { logoutUser } from "../../features/auth/authSlice";
import { useDispatch } from "react-redux";
import { ADMIN_LINKS } from "../../utils/navData";

const Sidebar = () => {
  const dispatch = useDispatch();
  const handleClick = async (e) => {
    e.preventDefault();
    const result = await dispatch(logoutUser());
    console.log(result);
  };
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">MyBlog</div>
      <nav className="sidebar-nav">
        <NavLink
          to={ADMIN_LINKS.DASHBOARD}
          className="sidebar-link"
          activeclassname="active"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={ADMIN_LINKS.BLOGS}
          className="sidebar-link"
          activeclassname="active"
        >
          Blogs
        </NavLink>
        <NavLink
          to={ADMIN_LINKS.CREATE_BLOG}
          className="sidebar-link"
          activeclassname="active"
        >
          Create Blog
        </NavLink>
        <button className="btn-logout" onClick={handleClick}>
          Logout
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
