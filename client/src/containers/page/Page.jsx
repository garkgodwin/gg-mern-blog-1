import React from "react";
import "./page.css";
import { useSelector } from "react-redux";

const Page = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <main className={`page ${isAuthenticated ? "page-auth" : ""}`}>
      {children}
    </main>
  );
};

export default Page;
