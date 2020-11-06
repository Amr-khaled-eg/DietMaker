import React from "react";
function Category(props) {
  return (
    <div className="category-container">
      <h2 className="category-name">{props.name}</h2>
      <div className="category">
        <input type="search" className="search" placeholder="Search" />
        {props.children}
      </div>
    </div>
  );
}
export default Category;
