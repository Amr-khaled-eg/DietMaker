import React from "react";
import Meal from "./meal";
import AddIcon from "@material-ui/icons/Add";
let snaksNumber = 1;
function Meals() {
  let [meals, setMeals] = React.useState([
    { name: "Breakfast", content: [] },
    { name: "Lunch", content: [] },
    { name: "Dinner", content: [] },
  ]);

  function addMeal() {
    setMeals((prev) => {
      return [...prev, { name: "snack " + snaksNumber, content: [] }];
    });
    snaksNumber++;
  }
  function addItem(item, mealName) {
    setMeals((prev) => {
      return prev.map((el) => {
        if (el.name === mealName) {
          return { ...el, content: [...el.content, item] };
        } else {
          return el;
        }
      });
    });
  }
  function del(name, mealName) {
    console.log("called delete");
    setMeals((prev) => {
      return prev.map((el) => {
        if (el.name === mealName) {
          return {
            ...el,
            content: el.content.filter((element) => {
              console.log(element.name);
              return element.name !== name;
            }),
          };
        } else {
          return el;
        }
      });
    });
  }
  console.log(meals);
  return (
    <section id="meals">
      {meals.map((el) => {
        return (
          <Meal name={el.name} content={el.content} add={addItem} del={del} />
        );
      })}
      <div class="add-container">
        <button className="add-meal" onClick={addMeal}>
          <AddIcon></AddIcon>
        </button>
      </div>
    </section>
  );
}
export default Meals;
