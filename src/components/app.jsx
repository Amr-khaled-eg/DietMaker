import React from "react";
import Main from "./main";
import Calculator from "./calculator";
import Page from "./infoPage";
import Heading from "./heading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="site-container">
      <Router>
        <Heading />
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/calculator" exact component={() => <Calculator />} />
          <Route
            path="/about us"
            exact
            component={() => <Page heading="About Us" content="conetnt" />}
          />
          <Route
            path="/help"
            exact
            component={() => <Page heading="Help" content="conetnt" />}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
