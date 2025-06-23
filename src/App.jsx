import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import FrontPage from "./components/FrontPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
    </Routes>
  );
}

export default App;
