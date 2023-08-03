import React from "react";

const Screen = ({ mode, setMode, val}) => {
  function changer() {
    setMode((prevMode) => !prevMode);
  }

  console.log(val);
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "120px",
          border: "0",
          outline: "0",
          padding: "10px",
          fontSize: "22px",
          backgroundColor: "#C1C1C1",
          borderRadius: "20px",
          display:"flex",
          justifyContent:"flex-end",
          alignItems:"flex-end"
        }}
        >{val}</div>

      <button
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          borderRadius: "40px",
          border: "0",
          outline: "0",
          textAlign: "center",
          width: "100px",
          height: "25px",
          backgroundColor: mode ? "black" : "white",
          color: mode ? "white" : "black",
          fontWeight: "600",
          cursor: "pointer",
          transition: "0.3s ease",
        }}
        onClick={changer}
      >
        {mode ? "Dark" : "light"}
      </button>
    </div>
  );
};

export default Screen;
