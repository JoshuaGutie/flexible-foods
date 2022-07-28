import React, { useState, useEffect } from "react";
import Meal from "./Meal"

{/*Using the props from Search.js to map each recipe */}
function SearchData(props) {
  return (
    <div className="dataC">
      <div className="mealInfo">
        {props.mealData.map(function (item) {
          return (
            <Meal key={item.id} item={item} />
          );
        })}
      </div>
    </div>
  );
}

export default SearchData;
