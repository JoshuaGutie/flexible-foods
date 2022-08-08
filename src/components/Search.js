import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./css/search.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchData from "./SearchData";
import orange from "./img/orange.png"






class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      index: 0,
      ingredients: [],
      mealData: null,
      load:3
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  /*Delete function to remove unwanted ingredients */
  handleDelete(index) {
    this.setState({
      ingredients: this.state.ingredients.filter((item) => item.includes()),
    });
    console.log();
  }

  handleClick(_event) {
    {
      /* Fethcing API data*/
    }
    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=bd41dee3858049c3960ddbfde3393060&ingredients=${this.state.ingredients}&number=${this.state.load}`
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
  /*Form Changes */

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  /*Function to add items to ingredients state array */

  handleSubmit(event) {
    if (this.state.value !== "") {
      this.setState((prevState) => ({
        ingredients: [...prevState.ingredients, this.state.value],
      }));

      this.setState((prevState) => {
        return { index: prevState.index + 1 };
      });
      console.log(this.state.ingredients);
      console.log(this.state.index);

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
          {/*ingredients form */}
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

          {/*initiates search for recipes */}
          <Fab
            aria-label="save"
            onClick={this.handleClick}
            style={{ margin: "auto" }}
          >
            <SearchIcon />
          </Fab>

          {/*if ingredients is not empty then render each item */}
          {this.state.ingredients != "" && (
            <div className="ingredientsC">
              <ol className="list">
                {this.state.ingredients.map((item, index) => {
                  return (
                    <li key={index} className="item">
                      {item}
                      <Fab
                        aria-label="save"
                        onClick={this.handleDelete}
                        style={{ margin: "auto" }}
                        key={index}
                      >
                        <DeleteIcon />
                      </Fab>
                    </li>
                  );
                })}
              </ol>
            </div>
            
          )}
        </div>
        {/*if mealdata is not empty then search and render recipes via spoonacular */}
        {this.state.mealData != null && (
            <SearchData mealData={this.state.mealData} />
          )}
      </div>
    );
  }
}

export default Search;
