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
          <svg
            className="PrevArr"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.43 147.875"
            x="0px"
            y="0px"
          >
            <path d="M98.93,72.14,60.72,94.21,22.5,116.27a15,15,0,0,1-22.5-13V15A15,15,0,0,1,15,0,14.82,14.82,0,0,1,22.5,2L60.72,24.1,98.93,46.16A15,15,0,0,1,98.93,72.14Z" />
          </svg>
        </button>
        <button className="NextBtn" onClick={nextButtonHandler}>
          <svg
            className="NextArr"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 106.43 147.875"
            x="0px"
            y="0px"
          >
            <path d="M98.93,72.14,60.72,94.21,22.5,116.27a15,15,0,0,1-22.5-13V15A15,15,0,0,1,15,0,14.82,14.82,0,0,1,22.5,2L60.72,24.1,98.93,46.16A15,15,0,0,1,98.93,72.14Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default App;
