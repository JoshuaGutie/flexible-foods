import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./css/search.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      ingredients: [],
      mealData: (null),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(_event) {
    {
      /* Fethcing API data*/
    }
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=bd41dee3858049c3960ddbfde3393060&ingredients=${this.state.ingredients}&number=2`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ mealData: data });
      })
      .catch(() => {
        console.log("error");
      });
    console.log(this.state.mealData);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    if (this.state.value != "") {
      this.setState((prevState) => ({
        ingredients: [...prevState.ingredients, this.state.value],
      }));
      console.log(this.state.ingredients);
      this.setState({ value: "" });

      event.preventDefault();
    } else {
      alert("Please input a valid ingredient!");
    }
  }

  render() {
    return (
      <div className="searchC">
        <div className="listC">
          <form onSubmit={this.handleSubmit}>
            <TextField
              label="Your Ingredients"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              style={{ marginTop: "20px" }}
            />
            <Fab
              aria-label="save"
              onClick={this.handleSubmit}
              style={{ marginTop: "15px" }}
            >
              <AddIcon />
            </Fab>
          </form>
          <Fab
            aria-label="save"
            onClick={this.handleClick}
            style={{ margin: "auto" }}
          >
            <SearchIcon />
          </Fab>
          <ol className="list">
            {this.state.ingredients.map((item) => {
              return <li className="item">{item}</li>;
            })}
          </ol>
        </div>
        {this.state.mealData != null && (
          <div className="mealInfo">
            {this.state.mealData.map(function (item, index) {
              return (
                <ul>
                  <li key={index}>{item.title}</li> <li >Missing ingredient: {item.usedIngredientCount}</li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Search;
