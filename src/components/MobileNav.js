import React, { Component } from "react";
import "./css/nav.css";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import { NavLink } from "react-router-dom";


class MobileNav extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
    this.createText = this.createText.bind(this);
  }

  createText() {
      console.log(this.state.isShow)
    if (this.state.isShow === false) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  }

  render() {
    return (
        <div className="mobileC">
      <div class="mobileNav">
      <NavLink exact to="/">
              My<a style={{color:"#E25306"}}>Flexible</a>Foods
            </NavLink>

        <Fab style={{ marginTop: "10px", marginRight: "30px" }}>
          <MenuIcon
            fontSize="large"
            aria-label="save"
            onClick={this.createText}
          />
        </Fab>
      </div>
      {this.state.isShow && (
          <div className="mobileLinks">{
            <NavLink exact to="/">
             Home
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
          }</div> )}
      </div>
    );
  }
}

export default MobileNav;
