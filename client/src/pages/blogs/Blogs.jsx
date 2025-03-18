import React, { useState } from "react";
import "./blogs.css";
import { LINKS } from "../../utils/navData";
import Page from "../../containers/page/Page";
import HeroSection from "./../../containers/section/HeroSection";
import Section from "../../containers/section/Section";
import SectionContent from "../../containers/section/SectionContent";
import aboutSection1Image from "../../assets/about-hero-1.png";
import BlogFilter from "./../../components/blog/BlogFilter";
import BlogCard from "./../../components/blog/BlogCard";
import { blogPosts } from "./../../data/blogPosts";

const Blogs = () => {
  const categories = ["All", "Tips", "Recipes", "Stories"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <Page>
      <HeroSection
        heading="Stories, Tips & Tasty Ideas"
        subTitle="Get inspired with flavorful recipes, behind-the-scenes kitchen stories, and cooking tips that bring joy to your home cooking journey."
        btn={{
          txt: "Browse Recipes",
          to: LINKS.RECIPES,
        }}
      />
      <BlogFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

      <div className="blog-grid">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </Page>
  );
};

export default Blogs;
