import { Opacity } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

export default function Meal({ item }) {
    const [info, setInfo] = useState("");
    const styles = useSpring({
      to:   { opacity: 1, x:0, y:0},
      from: { opacity: 0, x:1000, y:0},
    })
 
{/*Fetching api recipe info via id to retrieve original link/images */}
    useEffect(() => {
      fetch(
        `https://api.spoonacular.com/recipes/${item.id}/information?apiKey=bd41dee3858049c3960ddbfde3393060&includeNutrition=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setInfo(data)
        })
        .catch(() => {
          console.log("error");
        });
      console.log("info", info);
    }, [])


  return (
    <a.div style={styles} className="mealC">
       <img src={item.image} alt="recipe" className="mealImage" />
        <a href={info.spoonacularSourceUrl} target="_blank" className="mealTitle">{item.title}</a>
        <a className="missing">Missing ingredients: {item.missedIngredientCount}</a>
        <b className="missing">servings: <p style={{margin:"0px"}} >{info.servings}</p></b> 
        <a className="likes">Likes: {item.likes}</a>

    </a.div>
  );
}