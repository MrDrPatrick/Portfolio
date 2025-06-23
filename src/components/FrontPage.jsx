import React from "react";
import Header from "./blocks/Header";
import AboutBlock from "./blocks/AboutBlock";
import SkillsBlock from "./blocks/SkillsBlock";
import FeaturedBlock from "./blocks/FeaturedBlock";
import ProjectsBlock from "./blocks/ProjectsBlock";
import Footer from "./blocks/Footer";

import Menu from "./Menu";
import "./FrontPage.css";

function FrontPage() {
  return (
    <main id="wrapper">
      <Header />
      <AboutBlock />
      <SkillsBlock />
      <FeaturedBlock />
      <ProjectsBlock />
      <Footer />
    </main>
  );
}

export default FrontPage;
