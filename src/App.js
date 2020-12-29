import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          >
            <span className="TogglerIcon">
              <FontAwesomeIcon className="Icon" icon={faBars} />
            </span>
          </button>
          {!collapse ? (
            <div className="NavBarCollapse">
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
            </div>
          ) : null}
        </nav>
        <div className="Container">
          <div className="Row">
            <h1>
              "welcome to <strong>grandma's</strong>
            </h1>
            <button className="StoreBtn">explore</button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
