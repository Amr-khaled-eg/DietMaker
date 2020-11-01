import React from "react";
import Item from "../item";
import uuid from "react-uuid";
function Meal(props) {
  function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    props.add(JSON.parse(data), props.name);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

  return (
    <div className="meal-container" onDrop={drop} onDragOver={allowDrop}>
      <h2 className="meal-name">{props.name}</h2>
      <div className="meal">
        {props.content.map((el) => {
          return (
            <Item
              key={uuid()}
              id={uuid()}
              inMeal={true}
              name={el.name}
              del={props.del}
              parent={props.name}
              info={el.info}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}
export default Meal;
