import React from "react";
import Meals from "./meals/meals";
import Categorys from "./categorys/categorys";
import Category from "./categorys/category";
import Item from "./item";
import uuid from "react-uuid";
import Meal from "./meals/meal";

function App() {
  // this should be the array that has the data
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
  //i decided to use the props.chlidren to make things simpler in the site
  //so here the categorys component will have inside of it some of the category component
  //and the catagory will have the item component
  const [meals, setMeals] = React.useState([
    { name: "Breakfast", content: [] },
    { name: "Lunch", content: [] },
    { name: "Dinner", content: [] },
  ]);
  const [status, setStatus] = React.useState([]);
  const [snacks, setSnacks] = React.useState(1);

  function addMeal() {
    setMeals((prev) => {
      return [...prev, { name: "snack " + snacks, content: [] }];
    });
    setSnacks((prev) => prev + 1);
  }

  function addItem(item, mealName) {
    setMeals((prev) => {
      return prev.map((el) => {
        if (el.name === mealName) {
          return { ...el, content: [...el.content, item] };
        } else {
          return el;
        }
      });
    });
  }

  function updateAmount(newAmount, name, mealName) {
    setMeals((prev) => {
      return prev.map((el) => {
        if (el.name === mealName) {
          return {
            ...el,
            content: el.content.map((element) => {
              if (element.name === name) {
                return { ...element, amount: newAmount };
              } else {
                return element;
              }
            }),
          };
        } else {
          return el;
        }
      });
    });
  }

  function del(name, mealName) {
    setMeals((prev) => {
      return prev.map((el) => {
        if (el.name === mealName) {
          return {
            ...el,
            content: el.content.filter((element) => {
              return element.name !== name;
            }),
          };
        } else {
          return el;
        }
      });
    });
  }

  React.useEffect(() => {
    let total = {
      name: "total",
      data: { fat: 0, carb: 0, protien: 0, cal: 0 },
    };
    setStatus(() => {
      return meals.map((el) => {
        let d = { fat: 0, carb: 0, protien: 0, cal: 0 };
        el.content.forEach((element) => {
          d.fat += element.info.fat * (element.amount / 100);
          d.protien += element.info.protein * (element.amount / 100);
          d.carb += element.info.carb * (element.amount / 100);
          d.cal += element.info.cal * (element.amount / 100);
          total.data.fat += element.info.fat * (element.amount / 100);
          total.data.protien += element.info.protein * (element.amount / 100);
          total.data.carb += element.info.carb * (element.amount / 100);
          total.data.cal += element.info.cal * (element.amount / 100);
        });
        return {
          name: el.name,
          data: d,
        };
      });
    });
    setStatus((prev) => [...prev, total]);
  }, [meals]);

  return (
    <div>
      <div class="status">
        <table className="status-table">
          <tr>
            <th>Meals</th>
            <th>protien</th>
            <th>Carb</th>
            <th>fat</th>
            <th>cal</th>
          </tr>
          {status.map((el) => (
            <tr>
              <td>{el.name}</td>
              <td>{el.data.protien}</td>
              <td>{el.data.carb}</td>
              <td>{el.data.fat}</td>
              <td>{el.data.cal}</td>
            </tr>
          ))}
        </table>
      </div>
      <section className="workspace">
        <Meals addMeal={addMeal}>
          {meals.map((el) => (
            <Meal name={el.name} add={addItem}>
              {el.content.map((element) => (
                <Item
                  key={uuid()}
                  id={uuid()}
                  inMeal={true}
                  name={element.name}
                  del={del}
                  parent={el.name}
                  info={element.info}
                  amount={element.amount}
                  update={updateAmount}
                ></Item>
              ))}
            </Meal>
          ))}
        </Meals>
        <Categorys>
          {data.map((el) => (
            <Category name={el.name}>
              {el.content.map((element) => (
                <Item
                  key={uuid()}
                  id={uuid()}
                  inMeal={false}
                  name={element.name}
                  info={element.info}
                />
              ))}
            </Category>
          ))}
        </Categorys>
      </section>
    </div>
  );
}
export default App;
