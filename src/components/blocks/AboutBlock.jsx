import React from "react";
import "./AboutBlock.css";
import aboutData from "../../data/about.json";

function AboutBlock() {
  return (
    <section id="about">
      <h3>Who am I</h3>
      <div className="about-me">
        <img className="self-photo" src="/images/ITME.jpg" alt="Photo of Me" />
        <p className="about-text">{aboutData.about}</p>
      </div>
    </section>
  );
}

export default AboutBlock;
