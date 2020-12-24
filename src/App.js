import React from "react";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Main">
        <div className="Title">
          <h4>CLIENT</h4>
          <h1>TESTIMONIALS</h1>
        </div>
        <div className="Testimonials">
          <button className="leftBtn"></button>
          <div className="Box">
            <img
              src="customer-0.jpg"
              width="150"
              id="custoer-img"
              className="customerImg"
              alt="customer-0"
            />
            <h4>CUSTOMER NAME</h4>
            <p>Lorem</p>
          </div>
          <button className="rightBtn"></button>
        </div>
      </div>
    </div>
  );
};

export default App;
