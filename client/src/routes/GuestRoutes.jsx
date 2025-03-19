import { Route, Routes } from "react-router";
import React from "react";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import Recipes from "../pages/recipes/Recipes";
import Contact from "../pages/contact/Contact";
import Welcome from "../pages/welcome/Welcome";
import { LINKS } from "../utils/navData";

const GuestRoutes = () => {
  return (
    <Routes>
      <Route path={LINKS.HOME} element={<Home />} />
      <Route path={LINKS.ABOUT} element={<About />} />
      <Route path={LINKS.BLOGS} element={<Blogs />} />
      <Route path={LINKS.RECIPES} element={<Recipes />} />
      <Route path={LINKS.CONTACT} element={<Contact />} />
      <Route path={LINKS.WELCOME} element={<Welcome />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </Routes>
  );
};

export default GuestRoutes;
