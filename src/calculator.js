import React, { useState } from "react";
import Screen from "./screen";
import Buttons from "./Buttons";

const Calculator = () => {
  const [mode, setMode] = useState(true);
  let [val, setVal] = useState("0");

  function getVal(e) {
    const pressedValue = e.target.innerText;

    if (val === "0" && pressedValue !== "0") {
      setVal(pressedValue);
    } else if (val === "0" && pressedValue === "0") {
      return;
    } else {
      setVal(val.concat(pressedValue));
    }
  }

  function calc(){
    setVal(eval(val).toString())
  }

  function clear(){
    setVal("")
  }

  function backspace() {
    if (val.length > 0) {
      setVal(val.slice(0, -1));
    }
  }

  console.log(val);

  return (
    <div
      style={{
        maxWidth: "400px",
        width: "98%",
        margin: "auto",
        height: "650px",
        backgroundColor: mode ? "white" : "black",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "15px",
        borderRadius: "20px",
        flexDirection: "column",
        gap: "10px",
        transition: "0.3s ease",
      }}
    >
      {/* <Screen mode={mode} setMode={setMode} val={val}/> */}
      <Screen mode={mode} setMode={setMode} val={val} />
      <Buttons data={getVal} equal={calc} clear={clear} backspace={backspace}/>
    </div>
  );
};

export default Calculator;
