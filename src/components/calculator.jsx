import React from "react";

function Input(props) {
  return (
    <div className="input-container">
      <span className="input-info">{props.info}</span>
      <input
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        className="input"
        placeholder={props.placeholder}
        autoComplete="off"
      ></input>
    </div>
  );
}
function Calcualtor(props) {
  const [info, setInfo] = React.useState({
    wieght: 67,
    height: 180,
    age: 22,
    activity: 1.2,
    goal: 1,
    male: true,
    female: false,
  });
  const [result, setResult] = React.useState(0);
  function changeHandler(event) {
    console.log("chang");
    let value = event.target.value,
      name = event.target.name;

    setInfo((prev) => {
      if (value === "male") {
        return { ...prev, male: true, female: false };
      } else if (value === "female") {
        return { ...prev, female: true, male: false };
      } else {
        return { ...prev, [name]: value };
      }
    });
  }
  function BMR() {
    let keys = Object.keys(info);
    keys.forEach(function (el) {
      if (!info[el]) {
        return;
      }
    });
    if (info.male) {
      // let res = 66 + 13.7 * info.wieght + 5 * info.height - 6.8 * info.age;
      let res = 10 * info.wieght + 6.25 * info.height - 5 * info.age + 5;
      return res;
    }
    if (info.female) {
      // let res = 655 + 9.6 * info.wieght + 1.8 * info.height - 4.7 * info.age;
      let res = 10 * info.wieght + 6.25 * info.height - 5 * info.age - 161;

      return res;
    }
  }
  function calculate() {
    let bmr = BMR();
    if (bmr == null) {
      props.set("fill the form");
    } else {
      let res = Math.round(bmr * info.activity * info.goal);
      setResult(res);
      props.set(res);
    }
  }

  return (
    <section className="calculator-container">
      <div className="calculator">
        <div className="calc-item-container">
          <fieldset className="calc-item info">
            <legend>Your info</legend>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi, molestiae. Quibusdam qui voluptates a vero rem
            </p>
            <label>Height:</label>

            <Input
              type="text"
              info="CM"
              placeholder="Your Height"
              name="height"
              onChange={changeHandler}
              value={info.height}
            />
            <label>Weight:</label>
            <Input
              type="text"
              info="KG"
              placeholder="Your Wieght"
              name="wieght"
              onChange={changeHandler}
              value={info.wieght}
            />
            <label>Age:</label>
            <Input
              placeholder="Your Age"
              type="number"
              info={<img src="./styles/imgs/age.svg" className="age" />}
              name="age"
              onChange={changeHandler}
              value={info.age}
            />
            <label>Gender:</label>
            <div className="gender-area">
              <div className="gender-option">
                <label className="gender-name">Male</label>
                <input
                  checked={info.male ? true : false}
                  type="radio"
                  value="male"
                  name="gender"
                  className="gender-item"
                  onChange={changeHandler}
                ></input>
              </div>
              <div className="gender-option">
                <label className="gender-name">Female</label>
                <input
                  checked={info.female ? true : false}
                  type="radio"
                  name="gender"
                  value="female"
                  className="gender-item"
                  onChange={changeHandler}
                ></input>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="calc-item-container">
          <fieldset className="calc-item">
            <legend>Your Activity</legend>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eligendi harum in? Repudiandae, provident minus? Dolore porro ab
              quidem illo?
            </p>
            <label className="label-inline">Activity:</label>
            <select
              name="activity"
              className="input select"
              onChange={changeHandler}
            >
              <option value={1.2}>Little or no exercise</option>
              <option value={1.375}>Light exercise/sports 1-3days/week</option>
              <option value={1.55}>
                moderate exercise/sports 3-5days/week
              </option>
              <option value={1.75}>hard exercise/sports 6-7days/week</option>
              <option value={1.9}>
                very hard exercise/sports & physical job or training
              </option>
            </select>
          </fieldset>

          <fieldset className="calc-item">
            <legend>Your info</legend>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              eligendi harum in? Repudiandae, provident minus? Dolore porro ab
              quidem illo?
            </p>
            <label className="label-inline">Goal:</label>
            <select
              className="input select"
              name="goal"
              onChange={changeHandler}
            >
              <option value={0.59}>Extreme weight loss</option>
              <option value={0.79}>Weight loss</option>
              <option value={0.9}>Mild weight loss</option>
              <option value={1} selected>
                Maintain weight
              </option>
              <option value={1.1}>Mild weight gain</option>
              <option value={1.21}>Weight gain</option>
              <option value={1.41}>Fast Weight gain</option>
            </select>
          </fieldset>
          <div className="result">
            <div className="result-place">
              {result} <span style={{ fontSize: "1rem" }}>cal</span>
            </div>
            <button className="result-button" onClick={calculate}>
              Calculate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Calcualtor;
