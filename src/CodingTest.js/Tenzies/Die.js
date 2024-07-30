import React from "react";

const Die = (props) => {
  return (
    <div
      className="die-face"
      style={{ backgroundColor: props?.isHeld ? "blue" : "#afa6a6" }}
      onClick={(event) => props.handleIsHeld(props.id)}
    >
      <h1>{props.value}</h1>
    </div>
  );
};

export default Die;
