import React from "react";
import ReactDOM from "react-dom";
import Heading from "./components/heading";
import App from "./components/app";
ReactDOM.render(<Heading />, document.getElementById("nav-contanier"));
ReactDOM.render(<App />, document.getElementById("workspace-container"));
