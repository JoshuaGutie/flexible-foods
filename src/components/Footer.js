import "./css/footer.css";
import { NavLink } from "react-router-dom";
import platter from "./img/platter.png"



function Footer() {
    return ( 
        <div className="footer">

            <div className="flexibleInfo">
                <span>MyFlexibleFood</span>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"</p>
            </div>
            <div className="footerLinks">
                <span>LINKS</span>
            {
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
          }
            </div>
            <div className="footerContact">
          <span>Contact</span>
          <p>Email: Josh.gvtie@gmail.com</p>
          <img src={platter} alt="platter" style={{width:"100px", margin:"auto"}}/>

            </div>

        </div>
     );
}

export default Footer;