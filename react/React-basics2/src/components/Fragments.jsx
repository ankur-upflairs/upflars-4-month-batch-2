import React, { Fragment } from "react";
import "./Button.css";
function Fragments() {
  return (
    <React.Fragment>
      <button className="button">Click</button>
      <br />
      <Button2 />
      <br />
      <Button3 />
      <br />
      <Button4 />
    </React.Fragment>
  );
}

//when using inline styles - pass an object to style attribute
//change the name of properties to camelCase and remove the hyphens
//use them as key in the object

export function Button2() {
  return (
    <Fragment>
      <button
        style={{
          padding: "15px 32px",
          backgroundColor: "red",
          color: "blue",
          fontSize: "20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Click
      </button>
    </Fragment>
  );
}

let style = {
  padding: "15px 32px",
  backgroundColor: "maroon",
  color: "white",
  fontSize: "20px",
  border: "none",
  borderRadius: "15px",
};
function Button3() {
  return (
    <>
      <button style={style}>Click</button>
    </>
  );
}
//using bootstrap
function Button4() {
  return (
    <div>
      <button className="btn btn-primary">Click</button>
    </div>
  );
}
export default Fragments;
