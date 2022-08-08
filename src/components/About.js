import React, { Component } from 'react';
import "./css/about.css"
import about from "./img/about.png"
import Footer from "./Footer"


class About extends Component {
    render() {
        return (
            <div className='aboutC'>
               <div className='aboutCover'>
               <h2 style={{ margin:"auto", marginTop:'20px', fontFamily:'Lucida Sans'}}>About</h2>
               <img style={{width:'1000px', height:"391.75px", margin:'auto'}} src={about} alt="orange" className="cover"/>
               </div>
               <div className='aboutInfo'>
               <h1>Meal Planning</h1>
            <h2 className='madeEasy'>Made Easy</h2>
            <p>MyFlexible Foods was created by Joshua Gutierrez, with the goal of making meal management easier. </p>
               </div>
               <Footer />
            </div>
        );
    }
}

export default About;