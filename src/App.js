import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [nextValue, setNextValue] = useState("");
  const [equal, setEqual] = useState(true);
  const [reset, setReset] = useState(false);

  const multiplyHandler = (e) => {
    e.preventDefault();
    if (prevValue.length === 0 && displayValue.length !== 0) {
      setPrevValue(displayValue);
      setDisplayValue("");
    } else if (prevValue.length !== 0 && displayValue.length === 0) {
      let temp = Number(prevValue) * Number(displayValue);
      setNextValue(temp);
      setPrevValue(temp);
      setReset(true);
    }
  };

  const divideHandler = (e) => {
    e.preventDefault();
    if (prevValue.length === 0 && nextValue.length === 0) {
      setPrevValue(displayValue);
      setDisplayValue("");
    } else if (prevValue.length !== 0 && nextValue.length === 0) {
      let temp = Number(prevValue) / Number(displayValue);
      setDisplayValue(temp);
      setPrevValue(temp);
      setNextValue("");
      setReset(true);
    }
  };

  const minusHandler = (e) => {
    e.preventDefault();
    if (prevValue.length === 0 && nextValue.length === 0) {
      setPrevValue(displayValue);
      setDisplayValue("");
    } else if (prevValue.length !== 0 && nextValue.length === 0) {
      let temp = Number(prevValue) - Number(displayValue);
      setDisplayValue(temp);
      setPrevValue(temp);
      setNextValue("");
      setReset(true);
    }
  };

  const plusHandler = (e) => {
    e.preventDefault();
    if (prevValue.length === 0 && nextValue.length === 0) {
      setPrevValue(displayValue);
      setDisplayValue("");
    } else if (prevValue.length !== 0 && nextValue.length === 0) {
      let temp = Number(prevValue) + Number(displayValue);
      setDisplayValue(temp);
      setPrevValue(temp);
      setNextValue("");
      setReset(true);
    }
  };

  const equalHandler = (e) => {
    setDisplayValue(nextValue);
    setPrevValue("");
    setNextValue("");
    setReset(true);
  };

  const clearHandler = () => {
    setDisplayValue("0");
    setPrevValue("");
    setNextValue("");
  };

  const oneToNineHandler = (str) => {
    if (reset) {
      setDisplayValue(str);
      setReset(false);
    } else if (displayValue[0] === "0") {
      setDisplayValue(str);
    } else {
      setDisplayValue(displayValue + str);
    }
  };

  const zeroHandler = () => {
    if (reset) {
      setDisplayValue("0");
      setReset(false);
    } else {
      setDisplayValue(displayValue + "0");
    }
  };

  const pointHandler = () => {
    if (reset) {
      setDisplayValue("0.");
      setReset(false);
    } else {
      setDisplayValue(displayValue + ".");
    }
  };

  return (
    <div className="App">
      <section className="Calculator">
        <form>
          <input
            className="Screen"
            type="text"
            onChange={(e) => setDisplayValue(e)}
            value={displayValue}
          />
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
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("9")}
          >
            9
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("8")}
          >
            8
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("7")}
          >
            7
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("6")}
          >
            6
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("5")}
          >
            5
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("4")}
          >
            4
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("3")}
          >
            3
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("2")}
          >
            2
          </button>
          <button
            type="button"
            className="BtnGrey"
            onClick={() => oneToNineHandler("1")}
          >
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
