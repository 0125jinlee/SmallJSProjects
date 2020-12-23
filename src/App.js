import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [imgCounter, setImgCounter] = useState(0);

  const prevButtonHandler = () => {
    if (imgCounter > 0) {
      setImgCounter(imgCounter - 1);
    } else {
      setImgCounter(4);
    }
  };

  const nextButtonHandler = () => {
    if (imgCounter < 4) {
      setImgCounter(imgCounter + 1);
    } else {
      setImgCounter(0);
    }
  };

  return (
    <div className="App">
      <div
        className="Slider"
        style={{
          background:
            "url(" + imgCounter + ".jpeg) center/cover fixed no-repeat",
        }}
      >
        <button className="PrevBtn" onClick={prevButtonHandler}>
          <i classNam="PrevArrow" />
        </button>
        <button className="NextBtn" onClick={nextButtonHandler}>
          <i classNam="NextArrow" />
        </button>
      </div>
    </div>
  );
};

export default App;
