import React from "react";
import uuid from "react-uuid";
import { useDrag } from "react-dnd";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
function Item(props) {
  const [{ isDraging }, drag] = useDrag({
    item: {
      type: "card",
      data: {
        id: uuid(),
        name: props.name,
        info: props.info,
        amount: 100,
      },
    },
    collect: (monitor) => ({ isDraging: !!monitor.isDragging() }),
  });
  // function dragg(event) {
  //   let sen = JSON.stringify({
  //     id: uuid(),
  //     name: props.name,
  //     info: props.info,
  //     amount: 100,
  //   });
  //   event.dataTransfer.setData("text", sen);
  // }
  // function style(id) {
  //   console.log("called style");
  //   if (id === draggedItem.current) {
  //     return "dragged item";
  //   }
  //   return "item";
  // }

  function ChangeHandler(event) {
    const value = event.target.value;
    props.update(value, props.name, props.parent);
  }

  return (
    <div
      ref={props.inMeal ? null : drag}
      id={props.id}
      className={props.inMeal ? "item full" : "item"}
      // draggable={props.inMeal ? false : true}
      // onDragStart={dragg}
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
      <h5 className="item-name">{props.name}</h5>
      <p style={{ width: "20%" }}> cal {props.info.cal}</p>
      {props.inMeal ? (
        <IconButton
          aria-label="delete"
          onClick={() => {
            props.del(props.id, props.parent);
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
