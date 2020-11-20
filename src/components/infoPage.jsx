import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Page(props) {
  return (
    <div className="page-content">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Page;
