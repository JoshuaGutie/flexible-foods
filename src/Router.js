import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

// Start Router function here //

export function Router() {
  {
    /* Each url path will lead to a different component */
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Router;
