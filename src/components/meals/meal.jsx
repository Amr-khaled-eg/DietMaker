import React from "react";

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
      <div className="meal">{props.children}</div>
    </div>
  );
}
export default Meal;
