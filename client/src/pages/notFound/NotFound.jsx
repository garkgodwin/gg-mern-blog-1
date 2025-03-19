import React from "react";
import Page from "../../containers/page/Page";
import HeroSection from "../../containers/section/HeroSection";
import { useSelector } from "react-redux";

const NotFound = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  return (
    <Page>
      <HeroSection
        heading="404"
        subTitle="Page is not found"
        btn={{
          txt: `Go back to ${isAuthenticated ? "Dashboard" : "Home"}`,
          to: "/",
        }}
      />
    </Page>
  );
};

export default NotFound;
