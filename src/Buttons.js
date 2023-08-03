import React from "react";
import Button from "./Button";

const Buttons = (props) => {
  const arr = [
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
  ];
  return (
    <div
      style={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        placeItems: "center",
        gap: "15px",
        height: "inherit",
      }}
    >
      <button
        style={{
          display: "inline-block",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "0",
          outline: "0",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "16px",
          backgroundColor:"coral"
        }}
        onClick={props.clear}
      >
        AC
      </button>
      <button
        style={{
          display: "inline-block",
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          border: "0",
          outline: "0",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "16px",
          backgroundColor:"coral"
        }}
        onClick={props.backspace}
      >
        &lt;
      </button>
      {arr.map((item, i) => (
        <Button key={i} val={item} data={props.data} calc={props.equal} />
      ))}
      <button
        style={{
          display: "inline-block",
          width: "140px",
          height: "70px",
          borderRadius: "40px",
          border: "0",
          outline: "0",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "16px",
          gridColumn:"3/5",
          backgroundColor:"coral"
        }}
        onClick={props.equal}
      >
        =
      </button>
    </div>
  );
};

export default Buttons;
