import React from "react";
import Footer from "./blocks/Footer";
import GameHeader from "./gameBlocks/GameHeader";

import "./GamePage.css";

function GamePage() {
  return (
    <main id="wrapper">
      <GameHeader />
      <Footer />
    </main>
  );
}

export default GamePage;
