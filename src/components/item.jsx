import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
function Item(props) {
  function drag(event) {
    let sen = JSON.stringify({ name: props.name, info: props.info });
    event.dataTransfer.setData("text", sen);
  }
  return (
    <div
      id={props.id}
      className="item"
      draggable="true"
      onDragStart={drag}
      style={props.inMeal ? { width: "48%" } : {}}
    >
      <input
        className="item-input"
        contentEditable={true}
        type="number"
        min="0"
      />
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
