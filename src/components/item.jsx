import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
function Item(props) {
  function drag(event) {
    let sen = JSON.stringify({
      name: props.name,
      info: props.info,
      amount: 100,
    });
    event.dataTransfer.setData("text", sen);
  }

  function ChangeHandler(event) {
    const value = event.target.value;
    props.update(value, props.name, props.parent);
  }

  return (
    <div
      id={props.id}
      className="item"
      draggable={props.inMeal ? false : true}
      onDragStart={drag}
      style={props.inMeal ? { width: "48%" } : {}}
    >
      <input
        className="item-input"
        type="number"
        min="0"
        readOnly={props.inMeal ? false : true}
        value={props.amount}
        onChange={ChangeHandler}
      />
      <p> g</p>
      <h5>{props.name}</h5>
      <p>cal {props.info.fat}</p>
      {props.inMeal ? (
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.del(props.name, props.parent);
          }}
        >
          <DeleteIcon />
        </IconButton>
      ) : (
        ""
      )}
    </div>
  );
}
export default Item;
