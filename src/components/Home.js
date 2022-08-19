import React, { Component } from "react";
import "./css/home.css";
import cover from "./img/cover.png";
import fridge from "./img/fridge.png";
import recipes from "./img/recipes.png";
import calculator from "./img/calculator.png";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

class Home extends Component {
  render() {
    return (
      <div className="container">
        {/* */}
        <div className="cover">
          <div className="header">
            <h1>Our Recipes</h1>
            <h2>Your Ingredients</h2>
          </div>
          <img
            src={cover}
            alt="cover"
            className="coverp"
            style={{ width: "475px", marginTop: "75px" }}
          />
        </div>
        {/* */}
        <div className="infoC">
          <div className="query">
            <h3>What is MyFlexibleFoods?</h3>
            <span>
              MyFlexibleFood is a multi-functional 3-1 food management and
              recipes application!
            </span>
          </div>
        </div>
        <div className="trio">
          <div className="card">
            <img
              src={fridge}
              alt="fridge"
              style={{ width: "100px", alignSelf: "center" }}
            />
            <h3>Find Recipes</h3>
            <span>
              Find the best recipes based on whats already in your refrigerator{" "}
            </span>
            <NavLink
              onClick={this.createText}
              exact
              ClassName="active"
              to="/recipes"
            >
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: "10px",
                  backgroundColor: "#F96D22",
                  fontSize: "18px",
                }}
              >
                Go
              </Button>
            </NavLink>
          </div>
          <div className="card" style={{ alignSelf: "flex-end" }}>
            <img
              src={recipes}
              alt="fridge"
              style={{ width: "100px", alignSelf: "center" }}
            />
            <h3>Favorites</h3>
            <span>
              Browse through my selection of favorite recipes inside the
              spoonacular API ---(Coming Soon)--{" "}
            </span>
          </div>
          <div className="card">
            <img
              src={calculator}
              alt="fridge"
              style={{ width: "100px", alignSelf: "center" }}
            />
            <h3>Calorie Calculator</h3>
            <span>
              Calculate your maintainance calorie intake as well as calorie
              deficite{" "}
            </span>
            <NavLink
              onClick={this.createText}
              exact
              ClassName="active"
              to="/calculator"
            >
              <Button
                variant="contained"
                color="primary"
                style={{
                  marginTop: "10px",
                  backgroundColor: "#F96D22",
                  fontSize: "18px",
                }}
              >
                Go
              </Button>
            </NavLink>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
