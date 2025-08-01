import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import GamePage from "./components/GamePage";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/games/:gameid" element={<GamePage />} />
      </Routes>
    </>
  );
}

export default App;
