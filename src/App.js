import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <div className="Alert">Please Enter Valid Value</div>
        <form className="AddItem">
          <h3>To Do List</h3>
          <div className="InputGroup">
            <input type="text" className="InputItem" placeholder="Name..." />
            <div className="InputGroupAppend">
              <button className="AddBtn">Add Item</button>
            </div>
          </div>
        </form>
        <div className="List">
          <div className="Items">
            <div className="Item">
              <h5>a</h5>
              <div className="ItemIcons">
                <FontAwesomeIcon className="CheckIcon" icon={faCheckCircle} />
                <FontAwesomeIcon className="EditIcon" icon={faEdit} />
                <FontAwesomeIcon className="DeleteIcon" icon={faTimesCircle} />
              </div>
            </div>
          </div>
          <button type="button" className="ClearBtn">
            Clear Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
