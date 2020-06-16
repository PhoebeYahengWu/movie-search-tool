import React from "react";

function Container(props) {
  return <div className={`mt-3 container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;
