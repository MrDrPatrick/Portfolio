import React from "react";
import IconCard from "../cards/IconCard";
import skillsData from "../../data/skills.json";
import "./SkillsBlock.css";

function SkillsBlock() {
  function createIconCard(iconCard) {
    return <IconCard key={iconCard.id} name={iconCard.name} icon={iconCard.icon} />;
  }

  return (
    <section id="skills">
      <h3>My Skillset</h3>
      <div className="icon-grid">{skillsData.skills.map(createIconCard)}</div>
    </section>
  );
}

export default SkillsBlock;
