import React from "react";
import Main from "./main";
import Calculator from "./calculator";
import Page from "./infoPage";
import Heading from "./heading";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  let result = 0;
  function setRes(n) {
    result = n;
  }
  return (
    <div className="site-container">
      <Router>
        <Heading />
        <Switch>
          <Route path="/" exact component={() => <Main result={result} />} />
          <Route
            path="/calculator"
            exact
            component={() => <Calculator set={setRes} />}
          />
          <Route
            path="/about us"
            exact
            component={() => (
              <Page
                heading="About Us"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolores ipsa ratione. Nisi numquam delectus odit accusamus adipisci iusto saepe nihil. Aut, eius, at iure atque asperiores omnis nisi recusandae voluptatibus laudantium, quisquam sed quam magni doloribus sequi? Dignissimos praesentium voluptatibus suscipit fugiat, iure optio exercitationem voluptate ratione eveniet neque!
"
              />
            )}
          />
          <Route
            path="/help"
            exact
            component={() => (
              <Page
                heading="Help"
                content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis dolores ipsa ratione. Nisi numquam delectus odit accusamus adipisci iusto saepe nihil. Aut, eius, at iure atque asperiores omnis nisi recusandae voluptatibus laudantium, quisquam sed quam magni doloribus sequi? Dignissimos praesentium voluptatibus suscipit fugiat, iure optio exercitationem voluptate ratione eveniet neque!
"
              />
            )}
          />
        </Switch>
      </Router>
      <div id="pop-up" className="hidden">
        <p>
          by using this site you accept that we use cookie
          <button className="pop-btn">accept</button>
        </p>
      </div>
    </div>
  );
}
export default App;
