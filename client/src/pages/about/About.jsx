import React from "react";
import Page from "../../containers/page/Page";
import HeroSection from "./../../containers/section/HeroSection";
import Section from "../../containers/section/Section";
import SectionContent from "../../containers/section/SectionContent";
import aboutSection1Image from "../../assets/about-hero-1.png";
import { LINKS } from "../../utils/navData";

const About = () => {
  return (
    <Page>
      <HeroSection
        heading="Meet the Heart Behind the Recipes"
        subTitle="Hi, I'm Gark — a passionate home cook sharing stories, flavor-packed recipes, and kitchen adventures that celebrate the joy of homemade food. Let's cook, laugh, and make a mess together!"
        page="about"
        btn={{
          txt: "Browse My Favorite Recipes",
          to: LINKS.RECIPES,
        }}
      />
      {/* Section 1 */}
      <Section
        title="The Heart of Home Cooking"
        subTitle="Where stories simmer and flavors shine."
      >
        <SectionContent position="left" type="text">
          <p>
            Hey there! I'm Gark — a home cook with a love for simple
            ingredients, bold flavors, and unforgettable food moments.
            This blog is my cozy corner on the internet where I share
            the dishes that fill my kitchen and my heart.
          </p>
          <p>
            From nostalgic family favorites to creative modern twists,
            you'll find recipes that are easy to follow, full of soul,
            and perfect for anyone who enjoys cooking (or just loves
            eating). Alongside each dish, I sprinkle in real-life
            stories, cooking tips, and a few good laughs from my
            kitchen adventures.
          </p>
          <p>
            So grab your coffee, put on your favorite apron, and let's
            cook something amazing together — one mess, one memory,
            and one delicious bite at a time.
          </p>
        </SectionContent>
        <SectionContent position="right" type="image">
          <img src={aboutSection1Image} alt="Cooking" />
          <button>Explore My Cook Book</button>
        </SectionContent>
      </Section>
      <Section
        title="My Cooking Philosophy"
        subTitle="Simple, soulful, and made with love."
      >
        <SectionContent position="center">
          <p>
            I believe great food doesn't need to be complicated. It's
            about cooking with heart, honoring tradition, and enjoying
            the little moments that happen around the table. Whether
            it's a weeknight dinner or a weekend experiment, food
            should nourish the soul and bring people together.
          </p>
        </SectionContent>
      </Section>

      <Section title="Stay Connected">
        <SectionContent position="center">
          <p>
            Want to get the latest recipes, cooking stories, and
            behind-the-scenes mess-ups? Join my kitchen circle — it's
            cozy, casual, and full of flavor.
          </p>
          <button>Join the Newsletter</button>
        </SectionContent>
      </Section>
    </Page>
  );
};

export default About;
