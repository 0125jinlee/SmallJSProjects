import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [tempInput, setTempInput] = useState("");
  const [input, setInput] = useState([]);

  return (
    <div className="App">
      <section className="Calculator">
        <form>
          <input className="Screen" type="text"></input>
        </form>
        <div className="Buttons">
          <button type="button" className="BtnYellow" data-num="*">
            *
          </button>
          <button type="button" className="BtnYellow" data-num="/">
            /
          </button>
          <button type="button" className="BtnYellow" data-num="-">
            -
          </button>
          <button type="button" className="BtnYellow" data-num="+">
            +
          </button>
          <button type="button" className="BtnGrey" data-num=".">
            .
          </button>
          <button type="button" className="BtnGrey" data-num="9">
            9
          </button>
          <button type="button" className="BtnGrey" data-num="8">
            8
          </button>
          <button type="button" className="BtnGrey" data-num="7">
            7
          </button>
          <button type="button" className="BtnGrey" data-num="6">
            6
          </button>
          <button type="button" className="BtnGrey" data-num="5">
            5
          </button>
          <button type="button" className="BtnGrey" data-num="4">
            4
          </button>
          <button type="button" className="BtnGrey" data-num="3">
            3
          </button>
          <button type="button" className="BtnGrey" data-num="2">
            2
          </button>
          <button type="button" className="BtnGrey" data-num="1">
            1
          </button>
          <button type="button" className="BtnGrey" data-num="0">
            0
          </button>
          <button type="button" className="BtnEqual BtnGrey">
            =
          </button>
          <button type="button" className="BtnClear BtnGrey">
            C
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
