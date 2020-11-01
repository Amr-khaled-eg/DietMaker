import React from "react";
import Item from "../item";
import uuid from "react-uuid";
function Category(props) {
  return (
    <div className="category-container">
      <h2 className="category-name">{props.name}</h2>
      <div className="category">
        {props.content.map((el) => {
          return (
            <Item
              key={uuid()}
              id={uuid()}
              inMeal={false}
              name={el.name}
              info={el.info}
            ></Item>
          );
        })}
      </div>
    </div>
  );
}
export default Category;
