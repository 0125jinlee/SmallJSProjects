import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [hexCode, setHexCode] = useState();

  const clickHandler = () => {
    setHexCode("#" + Math.floor(Math.random() * 16777215).toString(16));
  };

  return (
    <div className="App" style={{ backgroundColor: hexCode }}>
      <div className="Main">
        <h1>HEX COLOR : {hexCode}</h1>
        <button onClick={clickHandler}>CLICK ME</button>
      </div>
    </div>
  );
};

export default App;
