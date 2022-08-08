import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Recipes from "./components/Recipes"
import About from "./components/About"
// Start Router function here //

export function Router() {
  {
    /* Each url path will lead to a different component */
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/about" element={<About />} />

    </Routes>
  );
}

export default Router;
