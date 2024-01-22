import React, { useCallback } from "react";
import "./App.css";
import CustomHook from "./Component/CustomHook";

const buttonStyle = {
  cursor: "pointer",
};

function App() {
  const { counter, setCounter } = CustomHook({
    counterDefVal: 0,
  });

  const handleInc = useCallback(() => {
    if (counter >= 10) return;
    setCounter((prev) => prev + 1);
  }, [counter, setCounter]);

  const handleDec = useCallback(() => {
    if (counter <= 0) return;
    setCounter((prev) => prev - 1);
  }, [counter, setCounter]);

  return (
    <div className="mainContainer">
      <button onClick={handleDec} type="button" style={buttonStyle}>
        Decrement
      </button>
      <h1>{counter}</h1>
      <button onClick={handleInc} type="button" style={buttonStyle}>
        Increment
      </button>
    </div>
  );
}

export default App;
