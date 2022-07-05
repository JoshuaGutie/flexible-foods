import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import "./css/search.css";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            ingredients:[]};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
          if(this.state.value != ''){
        this.setState(prevState => ({
            ingredients: [...prevState.ingredients, this.state.value]
          }))
        console.log(this.state.ingredients)
        this.setState({value: ''})
        event.preventDefault();
      }else {
      alert('Please input a valid ingredient!' );
    }}

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
              style={{marginTop:"20px"}}
            />
         <Fab
          aria-label="save"
          onClick={this.handleSubmit}
          style={{marginTop:"15px"}}
        >
            <AddIcon />
        </Fab>
        </form>
        <ol className="list">
        {this.state.ingredients.map(item => {
          return <li className="item">{item}</li>;
        })}
      </ol>
        </div>
      </div>
    );
  }
}

export default Search;
