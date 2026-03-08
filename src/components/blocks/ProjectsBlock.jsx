import React from "react";
import ProjectCard from "../cards/ProjectCard";
import "./ProjectsBlock.css";
import projectData from "../../data/projects.json";

function ProjectsBlock() {
  function createCard(project) {
    return <ProjectCard key={project.id} title={project.title} tech={project.tech} image={project.imgSRC} linkType={project.linkType} hasLink={project.hasLink} link={project.link} />;
  }

  return (
    <section id="projects">
      <h3>All Projects</h3>
      <div className="projects-grid">{projectData.projects.map(createCard)}</div>
    </section>
  );
}

export default ProjectsBlock;
