import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [nextInput, setNextInput] = useState("");

  const multiplyHandler = () => {};

  const divideHandler = () => {};

  const minusHandler = () => {};

  const plusHandler = () => {};

  const pointHandler = () => {
    setInput(input + ".");
  };

  const nineHandler = () => {
    setInput(input + "9");
  };

  const eightHandler = () => {
    setInput(input + "8");
  };

  const sevenHandler = () => {
    setInput(input + "7");
  };

  const sixHandler = () => {
    setInput(input + "6");
  };

  const fiveHandler = () => {
    setInput(input + "5");
  };

  const fourHandler = () => {
    setInput(input + "4");
  };

  const threeHandler = () => {
    setInput(input + "3");
  };

  const twoHandler = () => {
    setInput(input + "2");
  };

  const oneHandler = () => {
    setInput(input + "1");
  };

  const zeroHandler = () => {
    setInput(input + "0");
  };

  const equalHandler = () => {};

  const clearHandler = () => {
    setInput("");
  };

  return (
    <div className="App">
      <section className="Calculator">
        <form>
          <input className="Screen" type="text" value={Number(input)} />
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
