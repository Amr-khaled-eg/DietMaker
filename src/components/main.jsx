import React from "react";
import Intro from "./intro";
import Meals from "./meals/meals";
import Categorys from "./categorys/categorys";
import Category from "./categorys/category";
import Item from "./item";
import uuid from "react-uuid";
import Meal from "./meals/meal";
import { Link, withRouter } from "react-router-dom";

async function getData(nameToSearch) {
  let url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${nameToSearch}&api_key=lgqdhxMVk21QtcCy3lA0BuSS39Wn3KRUwsa3m6i6&pageSize=10&dataType=Survey (FNDDS)`;
  let response = await fetch(url);
  let data = await response.json();
  let parsed_data = [];
  data.foods.forEach(function (element) {
    let item = {
      name: element.lowercaseDescription,
      info: { protein: 0, fat: 0, carb: 0, cal: 0 },
    };
    element.foodNutrients.sort((a, b) => a.nutrientId - b.nutrientId);
    let infoKeys = Object.keys(item.info);
    for (let i = 0; i < 4; i++) {
      item.info[infoKeys[i]] = element.foodNutrients[i].value;
    }
    parsed_data.push(item);
  });
  return parsed_data;
}

function Main(props) {
  // this should be the array that has the data
  let [data, setData] = React.useState({
    name: "food",
    content: [],
  });
  //i decided to use the props.chlidren to make things simpler in the site
  //so here the categorys component will have inside of it some of the category component
  //and the catagory will have the item component
  const [meals, setMeals] = React.useState(
    getCookie("food") != ""
      ? JSON.parse(getCookie("food"))
      : [
          { name: "Breakfast", content: [], id: uuid() },
          { name: "Lunch", content: [], id: uuid() },
          { name: "Dinner", content: [], id: uuid() },
        ]
  );
  const [status, setStatus] = React.useState([]);

  function addMeal() {
    setMeals((prev) => {
      return [...prev, { name: "snack", content: [], id: uuid() }];
    });
  }
  function removeMeal(id) {
    setMeals((prev) => {
      return prev.filter((el) => {
        return el.id != id;
      });
    });
  }
  function addItem(item, mealName) {
    setMeals((prev) => {
      return prev.map((el, index) => {
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

  function del(id, mealName) {
    setMeals((prev) => {
      return prev.map((el) => {
        if (el.name === mealName) {
          return {
            ...el,
            content: el.content.filter((element) => {
              return element.id !== id;
            }),
          };
        } else {
          return el;
        }
      });
    });
  }
  async function startSearching(name, catName) {
    if (name === "") {
      setData(data);
      return;
    }

    console.log("called startSearching with " + name + " and " + catName);
    const parsed_data = await getData(name);
    console.log(data);
    setData((prev) => {
      return { name: "food", content: parsed_data };
    });
  }
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
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
          d.fat += Math.round(element.info.fat * (element.amount / 100));
          d.protien += Math.round(
            element.info.protein * (element.amount / 100)
          );
          d.carb += Math.round(element.info.carb * (element.amount / 100));
          d.cal += Math.round(element.info.cal * (element.amount / 100));
          total.data.fat += Math.round(
            element.info.fat * (element.amount / 100)
          );
          total.data.protien += Math.round(
            element.info.protein * (element.amount / 100)
          );
          total.data.carb += Math.round(
            element.info.carb * (element.amount / 100)
          );
          total.data.cal += Math.round(
            element.info.cal * (element.amount / 100)
          );
        });
        return {
          name: el.name,
          data: d,
        };
      });
    });
    setStatus((prev) => [...prev, total]);
    setCookie("food", JSON.stringify(meals), 10);
    console.log(getCookie("food"));
  }, [meals]);

  return (
    <div>
      <Intro />
      <section class="deit-maker">
        <div class="goal-container">
          <h2 className="your-goal"> your Goal:</h2>
          <Link className="calc-link" to="/calculator">
            Calculate now
          </Link>
          <h1 class="goal">
            {" "}
            {props.result} <span style={{ fontSize: "1rem" }}>cal</span>
          </h1>
        </div>
        <div id="workspace-container">
          <div class="status">
            <table className="status-table">
              <thead>
                <tr>
                  <th>Meals</th>
                  <th>protien</th>
                  <th>Carb</th>
                  <th>fat</th>
                  <th>cal</th>
                </tr>
              </thead>
              <tbody>
                {status.map((el) => (
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.data.protien}</td>
                    <td>{el.data.carb}</td>
                    <td>{el.data.fat}</td>
                    <td>{el.data.cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section className="workspace">
            <Categorys>
              <Category name={data.name} search={startSearching}>
                {data.content.length === 0 ? (
                  <h2 className="placeholder">
                    start typing to get the food you want
                  </h2>
                ) : null}
                {data.content.map((element) => (
                  <Item
                    key={uuid()}
                    id={uuid()}
                    inMeal={false}
                    name={element.name}
                    info={element.info}
                  />
                ))}
              </Category>
            </Categorys>
            <Meals addMeal={addMeal}>
              {meals.map((el) => (
                <Meal
                  name={el.name}
                  add={addItem}
                  remove={removeMeal}
                  key={el.id}
                  id={el.id}
                >
                  {el.content.map((element) => (
                    <Item
                      key={element.id}
                      id={element.id}
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
          </section>
        </div>
      </section>
    </div>
  );
}
export default Main;
