import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDrop } from "react-dnd";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
function Meal(props) {
  // function drop(event) {
  //   event.preventDefault();
  //   let data = event.dataTransfer.getData("text");
  //   props.add(JSON.parse(data), props.name);
  // }

  const [{ isOver }, drop] = useDrop({
    accept: "card",
    drop: (item, monitor) => {
      props.add(item.data, props.name);
    },
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  // function allowDrop(event) {
  //   event.preventDefault();
  // }
  let removeable =
    props.name != "Lunch" &&
    props.name != "Breakfast" &&
    props.name != "Dinner";
  return (
    <div className="meal-container" data-aos="zoom-in-up">
      <h2 className="meal-name">{props.name}</h2>
      <div
        ref={drop}
        className="meal"
        style={
          isOver
            ? {
                transition: "background-color  .4s ease,transform .4s ease",
                backgroundColor: "#d2f5e3",
                transform: "scale(1.02)",
              }
            : null
        }
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
