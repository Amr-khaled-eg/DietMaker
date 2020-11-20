import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
function Meal(props) {
  const [isDraggingOver, setIsDraggingOver] = React.useState({
    dragging: false,
    id: 0,
  });
  function drop(event) {
    //when i drop it will get the data and add these data it got from the item to the meals array
    setIsDraggingOver({ dragging: false, id: 0 });
    let data = event.dataTransfer.getData("text");

    props.add(JSON.parse(data), props.name);
  }
  function dragOver(event) {
    event.preventDefault();
    let id = event.target.id;
    setIsDraggingOver({ dragging: true, id: id });
  }
  function dragEnter(event) {
    event.preventDefault();
    // let id = event.target.id;

    // setIsDraggingOver({ dragging: true, id: id });
  }
  function dragLeave(event) {
    setIsDraggingOver({ dragging: false, id: 0 });
  }

  React.useEffect(() => {
    //iam adding event listeners to make the meals droppable areas
    let meal = document.getElementById(props.id);
    meal.addEventListener("dragover", dragOver);
    meal.addEventListener("dragenter", dragEnter);
    meal.addEventListener("dragleave", dragLeave);
    meal.addEventListener("drop", drop);
  }, []);
  let removeable =
    props.name != "Lunch" &&
    props.name != "Breakfast" &&
    props.name != "Dinner";
  return (
    <div className="meal-container" data-aos="zoom-in-up">
      <h2 className="meal-name">{props.name}</h2>
      <div
        className="meal"
        style={
          isDraggingOver.dragging && isDraggingOver.id === props.id
            ? {
                transition: "background-color  .4s ease,transform .4s ease",
                backgroundColor: "#d2f5e3",
                transform: "scale(1.02)",
              }
            : null
        }
        id={props.id}
      >
        {removeable ? (
          <IconButton
            className={"remove-meal"}
            onClick={() => {
              props.remove(props.id);
            }}
          >
            <RemoveIcon fontSize="small" />
          </IconButton>
        ) : null}

        {props.children}
      </div>
    </div>
  );
}
export default Meal;
