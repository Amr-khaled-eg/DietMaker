import React from "react";

import { Link, withRouter } from "react-router-dom";
function open() {
  let opt = document.querySelector(".options");
  opt.classList.toggle("open");
}
function Heading() {
  return (
    <nav className="nv">
      <div className="hamburger" onClick={open}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className="icon-div">
        <Link to="/">
          <img src="styles/imgs/icon.png" alt="" className="icon" />
        </Link>
      </div>
      <ul className="options">
        <li onClick={open}>
          <Link to="/">home</Link>
        </li>
        <li onClick={open}>
          <Link to="/calculator">calculator</Link>
        </li>
        <li onClick={open}>
          <Link to="/about us">about us</Link>
        </li>
        <li onClick={open}>
          <Link to="/help">help</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Heading;
