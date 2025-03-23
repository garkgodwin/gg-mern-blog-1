import React from "react";
import { Route, Routes } from "react-router";
import { ADMIN_LINKS } from "../utils/navData";
import Dashboard from "./../pages/admin/dashboard/Dashboard";
import NotFound from "../pages/notFound/NotFound";
import CreateBlog from "../pages/admin/create-blog/CreateBlog";
import Blogs from "../pages/admin/blogs/Blogs";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path={ADMIN_LINKS.DASHBOARD} element={<Dashboard />} />
      <Route path={ADMIN_LINKS.BLOGS} element={<Blogs />} />
      <Route
        path={ADMIN_LINKS.CREATE_BLOG}
        element={<CreateBlog />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
