import { Routes, Route } from "react-router";
import React from "react";
import GuestRoutes from "./GuestRoutes";
import AdminRoutes from "./AdminRoutes";
import { useSelector } from "react-redux";
import ROLES from "../utils/roles";

const AppRoutes = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      {!auth.isAuthenticated && <GuestRoutes />}
      {auth.isAuthenticated && auth.roles.includes(ROLES.admin) && (
        <AdminRoutes />
      )}
    </>
  );
};

export default AppRoutes;
