import React from "react";
import Page from "../../containers/page/Page";
import HeroSection from "../../containers/section/HeroSection";
import Section from "../../containers/section/Section";
import { LINKS } from "./../../utils/navData";
import SectionContent from "./../../containers/section/SectionContent";
import homeSection1Image from "../../assets/home-section-1.png";
import homeSection2Image from "../../assets/home-section-2.png";

const Home = () => {
  return (
    <Page>
      <HeroSection
        heading="Welcome to my Kitchen"
        subTitle="Discover delicious recipes, cooking tips, and food stories that bring joy to your table. Whether you're a home cook or a food lover, there's something here for everyone."
        btn={{
          txt: "Read My Weekly Kitchen Disasters",
          to: LINKS.BLOGS,
        }}
      />
      {/* Section 1 */}
      <Section
        title="Welcome to the Heart of Home Cooking"
        subTitle="Have your coffe and glasses ready"
      >
        <SectionContent position="left" type="text">
          <p>
            This blog is your cozy corner on the internet for
            everything delicious. From traditional comfort food to
            fresh, modern recipes, I share the dishes that bring joy
            to every meal. Whether you're a seasoned cook or just
            getting started, you'll find easy-to-follow recipes,
            helpful tips, and a sprinkle of storytelling behind every
            bite.
          </p>
          <p>
            Cooking should be simple, soulful, and full of flavor —
            and that's exactly what you'll find here. Let's cook
            something amazing together!
          </p>
        </SectionContent>
        <SectionContent position="right" type="image">
          <img src={homeSection1Image} alt="Cooking" />
          <button>Know More About Me!</button>
        </SectionContent>
      </Section>
      <Section
        title="Fresh Ingredients, Flavors That Inspire"
        subTitle="Great meals start with great ingredients"
      >
        <SectionContent position="left" type="image">
          <img
            src={homeSection2Image}
            alt="Fresh ingredients and cooking tools"
          />
          <button>Browse Recipe Categories</button>
        </SectionContent>

        <SectionContent position="right" type="text">
          <p>
            Whether you're preparing a weeknight dinner or planning a
            weekend feast, you'll discover how to choose, prep, and
            cook with flavor-forward ingredients that elevate your
            meals.
          </p>
          <p>
            Let's explore how simplicity in the kitchen leads to
            unforgettable flavors — one recipe at a time.
          </p>
        </SectionContent>
      </Section>
    </Page>
  );
};

export default Home;
