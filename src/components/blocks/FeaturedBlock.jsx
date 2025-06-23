import React from "react";
import FeatureCard from "../cards/FeatureCard";
import featuredItems from "../../data/featured.json";
import "./FeaturedBlock.css";

function FeaturedBlock() {
  function createCard(card) {
    return <FeatureCard key={card.id} id={card.id} title={card.title} desc={card.desc} tech={card.tech} image={card.imgSRC} hasLink={card.hasLink} link={card.link} />;
  }

  return (
    <section id="features">
      <h3>My Top Projects</h3>
      <div className="featured-flex">{featuredItems.featuredItems.map(createCard)}</div>
    </section>
  );
}

export default FeaturedBlock;
