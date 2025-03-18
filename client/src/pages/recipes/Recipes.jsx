import React from "react";
import { LINKS } from "./../../utils/navData";
import Page from "./../../containers/page/Page";
import HeroSection from "./../../containers/section/HeroSection";

const Recipes = () => {
  return (
    <Page>
      <HeroSection
        heading="Browse My Favorite Recipes"
        subTitle="From hearty meals to quick snacks, explore a delicious collection of homemade recipes that bring joy and comfort to every bite. Find your next go-to dish today!"
        btn={{
          txt: "Start Cooking Now",
          to: LINKS.FEATURED_RECIPES,
        }}
      />
    </Page>
  );
};

export default Recipes;
