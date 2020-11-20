import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
ReactDOM.render(<App />, document.getElementById("root"));
const Storage = localStorage;
let accept = "acceptedCookies";
window.onload = () => {
  let pop = document.querySelector("#pop-up");
  let popBtn = document.querySelector(".pop-btn");
  function popBtnClicked() {
    pop.classList.add("hidden");
    Storage.setItem(accept, true);
  }
  popBtn.addEventListener("click", popBtnClicked);
  if (!Storage.getItem(accept)) {
    pop.classList.remove("hidden");
  }
};
