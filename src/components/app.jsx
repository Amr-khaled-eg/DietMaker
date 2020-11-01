import React from "react";
import Meals from "./meals/meals";
import Categorys from "./categorys/categorys";

function App() {
  return (
    <section className="workspace">
      <Meals />
      <Categorys />
    </section>
  );
}
export default App;
