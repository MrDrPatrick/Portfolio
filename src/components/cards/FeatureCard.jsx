import React from "react";
import "./FeatureCard.css";

function FeatureCard(props) {
  let id = -1;
  function createTags(techTag) {
    id++;
    return <p key={id}>{techTag}</p>;
  }

  if (props.hasLink) {
    return (
      <div className="feature-flex">
        <img className="card-thumbnail" src={props.image} alt="Thumbnail" />
        <div className="tech-flex">{props.tech.map(createTags)}</div>
        <p className="card-title">{props.title}</p>
        <p className="card-desc">{props.desc}</p>
        <div className="feature-card-overlay">
          <a className="feature-overlay-button" href={props.link} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="feature-flex">
        <img className="card-thumbnail" src={props.image} alt="Thumbnail" />
        <div className="tech-flex">{props.tech.map(createTags)}</div>
        <p className="card-title">{props.title}</p>
        <p className="card-desc">{props.desc}</p>
        <div className="feature-card-overlay">
          <p className="feature-overlay-no-button">{props.link}</p>
        </div>
      </div>
    );
  }
}

export default FeatureCard;
