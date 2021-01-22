import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState(null);
  const [displayValue, setDisplayValue] = useState("");

  const [operator] = useState({
    "/": (prevVal, nextVal) => prevVal / nextVal,
    "*": (prevVal, nextVal) => prevVal * nextVal,
    "+": (prevVal, nextVal) => prevVal + nextVal,
    "-": (prevVal, nextVal) => prevVal - nextVal,
    "=": (prevVal, nextVal) => nextVal,
  });

  const multiplyHandler = () => {
    if (!prevValue && !nextValue) {
      setPrevValue(Number(displayValue));
    } else if (!prevValue && nextValue) {
      setPrevValue(Number(displayValue));
    } else if (prevValue && nextValue) {
      setNextValue(Number(prevValue + "*" + nextValue));
      setDisplayValue(Number(prevValue + "*" + nextValue));
    }
    setDisplayValue("");
  };

  const divideHandler = () => {};

  const minusHandler = () => {};

  const plusHandler = () => {};

  const pointHandler = () => {
    setDisplayValue(displayValue + ".");
  };

  const nineHandler = () => {
    setDisplayValue(displayValue + "9");
  };

  const eightHandler = () => {
    setDisplayValue(displayValue + "8");
  };

  const sevenHandler = () => {
    setDisplayValue(displayValue + "7");
  };

  const sixHandler = () => {
    setDisplayValue(displayValue + "6");
  };

  const fiveHandler = () => {
    setDisplayValue(displayValue + "5");
  };

  const fourHandler = () => {
    setDisplayValue(displayValue + "4");
  };

  const threeHandler = () => {
    setDisplayValue(displayValue + "3");
  };

  const twoHandler = () => {
    setDisplayValue(displayValue + "2");
  };

  const oneHandler = () => {
    setDisplayValue(displayValue + "1");
  };

  const zeroHandler = () => {
    setDisplayValue(displayValue + "0");
  };

  const equalHandler = () => {};

  const clearHandler = () => {};

  return (
    <div className="App">
      <section className="Calculator">
        <form>
          <input className="Screen" type="text" value={displayValue} />
        </form>
        <div className="Buttons">
          <button type="button" className="BtnYellow" onClick={multiplyHandler}>
            *
          </button>
          <button type="button" className="BtnYellow" onClick={divideHandler}>
            /
          </button>
          <button type="button" className="BtnYellow" onClick={minusHandler}>
            -
          </button>
          <button type="button" className="BtnYellow" onClick={plusHandler}>
            +
          </button>
          <button type="button" className="BtnGrey" onClick={pointHandler}>
            .
          </button>
          <button type="button" className="BtnGrey" onClick={nineHandler}>
            9
          </button>
          <button type="button" className="BtnGrey" onClick={eightHandler}>
            8
          </button>
          <button type="button" className="BtnGrey" onClick={sevenHandler}>
            7
          </button>
          <button type="button" className="BtnGrey" onClick={sixHandler}>
            6
          </button>
          <button type="button" className="BtnGrey" onClick={fiveHandler}>
            5
          </button>
          <button type="button" className="BtnGrey" onClick={fourHandler}>
            4
          </button>
          <button type="button" className="BtnGrey" onClick={threeHandler}>
            3
          </button>
          <button type="button" className="BtnGrey" onClick={twoHandler}>
            2
          </button>
          <button type="button" className="BtnGrey" onClick={oneHandler}>
            1
          </button>
          <button type="button" className="BtnGrey" onClick={zeroHandler}>
            0
          </button>
          <button
            type="button"
            className="BtnEqual BtnGrey"
            onClick={equalHandler}
          >
            =
          </button>
          <button
            type="button"
            className="BtnClear BtnGrey"
            onClick={clearHandler}
          >
            C
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
