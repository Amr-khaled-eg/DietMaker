import React from "react";
import AddIcon from "@material-ui/icons/Add";

function Meals(props) {
  return (
    <section id="meals">
      {props.children}
      <div class="add-container">
        <button className="add-meal" onClick={props.addMeal}>
          <AddIcon></AddIcon>
        </button>
      </div>
    </section>
  );
}

export default Meals;
