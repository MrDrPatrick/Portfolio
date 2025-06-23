import React from "react";
import "./IconCard.css";

function IconCard(props) {
  return (
    <div className="icon-card">
      <img className="icon-image" src={props.icon} alt="ICON" />
      <p className="icon-text">{props.name}</p>
    </div>
  );
}

export default IconCard;
