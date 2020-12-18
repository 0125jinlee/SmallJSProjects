import React, { useState } from "react";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Main">
        <button>Generate Quote</button>
        <h3 className="QuoteBox">
          <span>
            <svg
              className="QuoteIcon"
              aria-hidden="true"
              data-prefix="fas"
              data-icon="quote-left"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg
            >
              <path
                fill="currentcolor"
                d="M 464 256 h -80 v -64 c 0 -35.3 28.7 -64 64 -64 h 8 c 13.3 0 24 -10.7 24 -24 V 56 c 0 -13.3 -10.7 -24 -24 -24 h -8 c -88.4 0 -160 71.6 -160 160 v 240 c 0 26.5 21.5 48 48 48 h 128 c 26.5 0 48 -21.5 48 -48 V 304 c 0 -26.5 -21.5 -48 -48 -48 Z m -288 0 H 96 v -64 c 0 -35.3 28.7 -64 64 -64 h 8 c 13.3 0 24 -10.7 24 -24 V 56 c 0 -13.3 -10.7 -24 -24 -24 h -8 C 71.6 32 0 103.6 0 192 v 240 c 0 26.5 21.5 48 48 48 h 128 c 26.5 0 48 -21.5 48 -48 V 304 c 0 -26.5 -21.5 -48 -48 -48 Z"
              ></path>
            </svg>
          </span>
          <span>Quote</span>
        </h3>
      </div>
    </div>
  );
};

export default App;
