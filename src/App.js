import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Animated } from "react-animated-css";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const [collapse, setCollapse] = useState(true);

  const TogglerIconHandler = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="App">
      <header>
        <nav className="NavBar">
          <a className="Logo" href="/">
            <img src="logo.svg" alt="Logo" />
          </a>
          <button
            className="NavBarToggler"
            type="button"
            onClick={TogglerIconHandler}
            data-toggle="collapse"
            data-target=".NavBarCollapse"
          >
            <span className="TogglerIcon">
              <FontAwesomeIcon className="Icon" icon={faBars} />
            </span>
          </button>
          <div
            className="NavBarCollapse"
            style={{
              display: !collapse ? "block" : "none",
            }}
          >
            <Animated
              animationIn="slideInDown"
              animationOut="slideOutUp"
              animationInDuration={800}
              animationOutDuration={800}
              isVisible={true}
            >
              <ul className="List">
                <li className="Item">
                  <button className="Link">Home</button>
                </li>
                <li className="Item">
                  <button className="Link">About</button>
                </li>
                <li className="Item">
                  <button className="Link">Store</button>
                </li>
              </ul>
            </Animated>
          </div>
        </nav>
        <div className="Container">
          <div className="Row">
            <div className="Banner">
              <h1>
                welcome to <strong>grandma's</strong>
              </h1>
              <button>explore</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
