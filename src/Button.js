import React from "react";

const Button = (props) => {

  
  return (
    <>
    <button
      style={{
        display: "inline-block",
        width: "70px",
        height: "70px",
        borderRadius: "50%",
        border: "0",
        outline: "0",
        cursor:"pointer",
        fontWeight:"600",
        fontSize:"16px",
        backgroundColor:"#44dea5"
      }}
    onClick={props.data}
    >
      {props.val}
    </button>
    </>
  );
};

export default Button;
