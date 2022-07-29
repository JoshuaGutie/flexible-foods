import React, { Component } from "react";
import searchCover from "./img/searchCover.png";
import "./css/recipes.css";
import Search from "./Search";
import orange from "./img/orange.png";
import Footer from "./Footer";


class Recipes extends Component {
  render() {
    return (
      <div className="recipeC">
        <div className="cover">
          <div className="recipeInfo">
            <h1>Find Recipes With What's In</h1>
            <h2>Your Refrigerator</h2>
          </div>
          <div className="recipePhoto">
            {" "}
            <img src={searchCover} alt="cover" className="coverp" />
          </div>
        </div>
        <div className="tutor">
          <h3 style={{ marginBottom: "20px" }}>
            {" "}
            <img
              src={orange}
              alt="orange"
              style={{ width: "75px", height: "auto", margin: "auto" }}
            />
            How It Works
          </h3>

          <span>
            All you have to do is enter the ingredients you have,{" "}
            <a style={{ fontWeight: "500" }}>one at a time,</a> and{" "}
            <a style={{ color: "#E25306" }}>MyFlexibleFoods</a> will give you
            recipe options with those ingredients.
          </span>
        </div>
        <Search />
        <Footer />
      </div>
    );
  }
}

export default Recipes;
