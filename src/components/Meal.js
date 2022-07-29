import React, { useState, useEffect } from "react";

export default function Meal({ item }) {
    const [info, setInfo] = useState("");
 
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
    <div className="mealC">
       <img src={item.image} alt="recipe" className="mealImage" />
        <a href={info.spoonacularSourceUrl} target="_blank" className="mealTitle">{item.title}</a>
        <a className="missing">Missing ingredients: {item.usedIngredientCount}</a>
        <b className="missing">{info.dishTypes}</b>

    </div>
  );
}