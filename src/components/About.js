import React, { Component } from "react";
import "./css/about.css";
import about from "./img/about.png";
import Footer from "./Footer";
import fridge from "./img/fridge.png";
import calculator from "./img/calculator.png";

class About extends Component {
  render() {
    return (
      <div className="aboutC">
        <div className="aboutCover">
          <h2
            style={{
              margin: "auto",
              marginTop: "20px",
              fontFamily: "Lucida Sans",
            }}
          >
            About
          </h2>
          <img
            style={{ width: "1000px", height: "391.75px", margin: "auto" }}
            src={about}
            alt="orange"
            className="cover"
          />
        </div>
        <div className="aboutInfo">
          <h1>Meal Planning</h1>
          <h2 className="madeEasy">Made Easy</h2>
          <p>
            MyFlexible Foods was created by Joshua Gutierrez, with the goal of
            making meal management easier.{" "}
          </p>
        </div>
        <div className="animatedTitle">
          {" "}
          <span className="titleSpan">
            My
            <span className="titleSpan" style={{ color: "#E25306" }}>
              Flexible
            </span>
            Foods
          </span>
        </div>
        <div className="aboutCardContainer">
          <div className="aboutCard">
            <span>
              Find the best recipes based on whats already in your refrigerator.
              Using the spoonacular api, MyFlexibleFoods will find the best
              recipes based on your ingredients you input
            </span>
            <img src={fridge} alt="fridge" className="aboutImg" />
          </div>

          <div className="aboutCard">
            <img src={calculator} alt="calculator" className="aboutImg" />
            <span>
              Calculate your maintainance calorie intake as well as calorie
              deficite. By answering a few questions about yourself,
              MyFlexibleFoods will display your calorie goals.
            </span>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
