import React from "react";
import Category from "./category";

function Categorys() {
  let [data, setData] = React.useState([
    {
      name: "fruits",
      content: [
        { name: "banana", info: { cal: 1, fat: 1, carb: 1, protein: 1 } },
        { name: "apple", info: { cal: 1, fat: 1, carb: 1, protein: 1 } },
      ],
    },
    {
      name: "meats",
      content: [
        { name: "checken", info: { cal: 1, fat: 1, carb: 1, protein: 1 } },
        { name: "meat", info: { cal: 1, fat: 1, carb: 1, protein: 1 } },
      ],
    },
    {
      name: "seeds",
      content: [
        { name: "rice", info: { cal: 1, fat: 1, carb: 1, protein: 1 } },
        { name: "pasta", info: { cal: 1, fat: 1, carb: 1, protein: 1 } },
      ],
    },
  ]);

  return (
    <section id="items">
      {data.map((el) => {
        return <Category content={el.content} name={el.name} />;
      })}
    </section>
  );
}
export default Categorys;
