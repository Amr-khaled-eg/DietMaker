import React from "react";

function Heading() {
  return (
    <nav className="nv">
      <div className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="icon-div">
        <a href="">
          <img src="styles/imgs/icon.png" alt="" className="icon" />
        </a>
      </div>
      <ul className="options">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">calculator</a>
        </li>
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">help</a>
        </li>
      </ul>
    </nav>
  );
}
export default Heading;
