import React from "react";
import { useParams } from "react-router-dom";
import projectData from "../data/projectPage.json";
import Footer from "./blocks/Footer";
import GameHeader from "./gameBlocks/GameHeader";
import GameText from "./gameBlocks/GameText";

import "./GamePage.css";

function GamePage() {
  //useParams to get the games/:gameid
  const params = useParams();
  //use the gameid to find the right project in the JSON.
  const project = projectData.projects.find((p) => p.id === parseInt(params.gameid));

  //make the text blocks
  function makeBlocks(block) {
    return <GameText key={block.id} title={block.title} body={block.body} color={block.color} hasImage={block.hasImage} side={block.side} imgSource={block.src} />;
  }

  return (
    <main id="wrapper">
      <GameHeader title={project.title} imageList={project.images} />
      {project.text.map(makeBlocks)}
      <Footer />
    </main>
  );
}

export default GamePage;
