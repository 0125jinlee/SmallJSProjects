import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [displayValue, setDisplayValue] = useState("0");
  const [prevValue, setPrevValue] = useState("");
  const [nextValue, setNextValue] = useState("");
  const [operation, setOperation] = useState("");
  const [reset, setReset] = useState(false);

  let operations = {
    "+": function (x, y) {
      return Number(x) + Number(y);
    },
    "-": function (x, y) {
      return Number(x) - Number(y);
    },
    "*": function (x, y) {
      return Number(x) * Number(y);
    },
    "/": function (x, y) {
      return Number(x) / Number(y);
    },
  };

  const operationsHandler = (e, str) => {
    e.preventDefault();
    setOperation(str);
    setReset(true);
    if (prevValue.length === 0 && nextValue.length === 0) {
      setPrevValue(displayValue);
      setDisplayValue("");
    } else if (prevValue.length !== 0 && nextValue.length === 0 && !reset) {
      setNextValue(operations[operation](prevValue, displayValue));
      setDisplayValue(operations[operation](prevValue, displayValue));
      setPrevValue("");
    } else if (prevValue.length === 0 && nextValue.length !== 0 && !reset) {
      setPrevValue(operations[operation](nextValue, displayValue));
      setDisplayValue(operations[operation](nextValue, displayValue));
      setNextValue("");
    }
  };

  const equalHandler = (e) => {
    e.preventDefault();
    if (prevValue.length !== 0 && operation && displayValue.length !== 0) {
      setDisplayValue(operations[operation](prevValue, displayValue));
      setPrevValue("");
      setNextValue("");
      setOperation("");
      setReset(true);
    } else if (
      nextValue.length !== 0 &&
      operation &&
      displayValue.length !== 0
    ) {
      setDisplayValue(operations[operation](nextValue, displayValue));
      setPrevValue("");
      setNextValue("");
      setOperation("");
      setReset(true);
    }
  };

  const clearHandler = () => {
    setDisplayValue("0");
    setPrevValue("");
    setNextValue("");
    setOperation("");
    setReset(false);
  };

  const oneToNineHandler = (str) => {
    if (reset) {
      setDisplayValue(str);
      setReset(false);
    } else if (displayValue === "0") {
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
          <button
            type="button"
            className="BtnYellow"
            onClick={(e) => operationsHandler(e, "*")}
          >
            *
          </button>
          <button
            type="button"
            className="BtnYellow"
            onClick={(e) => operationsHandler(e, "/")}
          >
            /
          </button>
          <button
            type="button"
            className="BtnYellow"
            onClick={(e) => operationsHandler(e, "-")}
          >
            -
          </button>
          <button
            type="button"
            className="BtnYellow"
            onClick={(e) => operationsHandler(e, "+")}
          >
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
