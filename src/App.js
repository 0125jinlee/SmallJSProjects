import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
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
            data-toggle="collapse"
            dataTarget="#myNav"
          >
            <span className="TogglerIcon">
              <FontAwesomeIcon className="Icon" icon={faBars} />
            </span>
          </button>
        </nav>
      </header>
    </div>
  );
};

export default App;
