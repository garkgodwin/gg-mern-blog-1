import React from "react";
import { Outlet } from "react-router";
import Page from "../../containers/page/Page";

const Welcome = () => {
  return (
    <Page>
      Welcome
      <Outlet />
    </Page>
  );
};

export default Welcome;
