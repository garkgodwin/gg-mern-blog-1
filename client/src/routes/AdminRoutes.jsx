import React from "react";
import { Route, Routes } from "react-router";
import { ADMIN_LINKS } from "../utils/navData";
import Dashboard from "./../pages/dashboard/Dashboard";
import NotFound from "../pages/notFound/NotFound";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path={ADMIN_LINKS.DASHBOARD} element={<Dashboard />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
