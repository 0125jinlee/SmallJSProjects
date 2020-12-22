import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [colorControl, setColorControl] = useState("rgb(51, 51, 51)");

  const decrementHandler = () => {
    if (counter === 1) {
      setCounter(counter - 1);
      setColorControl("rgb(51, 51, 51)");
    } else if (counter === 0) {
      setColorControl("rgb(51, 51, 51)");
      setCounter(counter - 1);
      setColorControl("red");
    } else if (counter > 0) {
      setColorControl("green");
      setCounter(counter - 1);
    } else {
      setColorControl("red");
      setCounter(counter - 1);
    }
  };

  const incrementHandler = () => {
    if (counter === -1) {
      setCounter(counter + 1);
      setColorControl("rgb(51, 51, 51)");
    } else if (counter === 0) {
      setCounter(counter + 1);
      setColorControl("green");
    } else if (counter > 0) {
      setCounter(counter + 1);
    } else if (counter < 0) {
      setColorControl("red");
      setCounter(counter + 1);
    }
  };

  return (
    <div className="App">
      <div className="CounterBox">
        <h1>COUNTER</h1>
        <div className="Counter" style={{ color: colorControl }}>
          {counter}
        </div>
        <button onClick={decrementHandler}>LOWER COUNT</button>
        <button onClick={incrementHandler}>ADD COUNT</button>
      </div>
    </div>
  );
};

export default App;
