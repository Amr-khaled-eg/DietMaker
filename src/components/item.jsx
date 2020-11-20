import React from "react";
import uuid from "react-uuid";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
function Item(props) {
  let stop = true;
  function scroll(step) {
    let scrollY = window.pageYOffset;
    window.scrollTo({ top: scrollY + step });
    if (!stop) {
      setTimeout(function () {
        scroll(step);
      }, 20);
    }
  }
  function dragging(event) {
    // console.log("The Cline y is : " + event.clientY);
    // stop = true;
    // if (event.clientY < 100) {
    //   console.log("dragging up");
    //   stop = false;
    //   scroll(-10);
    // } else if (event.clientY > window.innerHeight - 100) {
    //   stop = false;
    //   scroll(10);
    // } else {
    //   return;
    // }
    let rect = event.clientY;
    setTimeout(() => {
      if (rect <= 100) {
        window.scrollTo({ top: window.scrollY - 30, behavior: "smooth" });
      } else if (rect >= window.innerHeight - 100) {
        window.scrollTo({ top: window.scrollY + 30, behavior: "smooth" });
      } else {
        return;
      }
    }, 20);
  }
  function dragStart(event) {
    //when the drag starts this will be called and it will use the setData method to move the data
    //to the drop area
    event.target.className += " holding";
    let sen = JSON.stringify({
      id: uuid(),
      name: props.name,
      info: props.info,
      amount: 100,
    });
    event.dataTransfer.setData("text", sen);
  }
  function dragEnd(event) {
    //here iam reseting some sittings
    stop = true;
    event.target.className = "item";
  }
  function ChangeHandler(event) {
    const value = event.target.value;
    props.update(value, props.name, props.parent);
  }
  React.useEffect(() => {
    //here i am adding event listeners to each item to be abel to drag and drop
    let item = document.getElementById(props.id);
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
    item.addEventListener("drag", dragging);
  });

  return (
    <div
      draggable={props.inMeal ? false : true}
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
