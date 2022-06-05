import React, { Component } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import "./css/nav.css"
import fork from "./img/fork.png"

class Nav extends Component {
  render() {
    return (
        <div class="nav">
          {
            <NavLink exact to="/">
              My<a style={{color:"#E25306"}}>Flexible</a>Foods
            </NavLink>
          }
                    {
            <NavLink exact activeClassName="active" to="/recipes">
              Find Recipes
            </NavLink>
          }
                    {
            <NavLink exact activeClassName="active" to="/favorites">
              Favorites
            </NavLink>
          }
                    {
            <NavLink exact activeClassName="active" to="/about">
              About
            </NavLink>
          }
          
          <img src={fork} alt="fork" className="fork"/>
         
        </div>
    );
  }
}

export default Nav;
