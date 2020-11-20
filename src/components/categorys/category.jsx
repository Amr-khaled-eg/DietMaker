import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Category(props) {
  const [searchTerm, setSearchTerm] = React.useState("");
  React.useEffect(
    function changeHandler() {
      const delay = setTimeout(() => {
        console.log(searchTerm + " when i was called");
        props.search(searchTerm, props.name);
      }, 1000);
      return () => clearTimeout(delay);
    },
    [searchTerm]
  );
  React.useEffect(() => {
    console.log("hello");
    AOS.init({ duration: 500 });
  }, []);

  return (
    <div className="category-container" data-aos="fade-up-right">
      <h2 className="category-name">{props.name}</h2>
      <div className="category">
        <input
          type="search"
          className="search"
          placeholder="Search"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        {props.children}
      </div>
    </div>
  );
}
export default Category;
