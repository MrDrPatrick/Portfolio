import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

function ProjectCard(props) {
  let id = -1;
  function createTags(techTag) {
    id++;
    return <p key={id}>{techTag}</p>;
  }

  if (props.hasLink) {
    if (props.linkType == "out") {
      return (
        <div className="project-flex">
          <img className="project-card-thumbnail" src={props.image} alt="Thumbnail" />
          <div className="tech-flex">{props.tech.map(createTags)}</div>
          <p className="project-card-title">{props.title}</p>
          <div className="project-card-overlay">
            <a className="project-overlay-button" href={props.link} target="_blank" rel="noopener noreferrer">
              Visit
            </a>
          </div>
        </div>
      );
    } else {
      return (
        <div className="project-flex">
          <img className="project-card-thumbnail" src={props.image} alt="Thumbnail" />
          <div className="tech-flex">{props.tech.map(createTags)}</div>
          <p className="project-card-title">{props.title}</p>
          <div className="project-card-overlay">
            <Link className="project-overlay-button" to={props.link}>
              Visit
            </Link>
          </div>
        </div>
      );
    }
  } else {
    return (
      <div className="project-flex">
        <img className="project-card-thumbnail" src={props.image} alt="Thumbnail" />
        <div className="tech-flex">{props.tech.map(createTags)}</div>
        <p className="project-card-title">{props.title}</p>
        <div className="project-card-overlay">
          <p className="project-overlay-no-button">{props.link}</p>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
