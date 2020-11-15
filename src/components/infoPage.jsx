import React from "react";

function Page(props) {
  return (
    <div className="page-content">
      <h1>{props.heading}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Page;
