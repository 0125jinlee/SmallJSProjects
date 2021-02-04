import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const inputHandler = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  const addHandler = (e) => {
    e.preventDefault();
    if (input.length === 0) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000);
    } else {
      let arr = list;
      arr.push(input);
      setList(arr);
      refreshList();
    }
  };

  let renderedList;

  const refreshList = () => {
    renderedList = list.map((element) => {
      return (
        <div className="Item">
          <h5>{element}</h5>
          <div className="ItemIcons">
            <FontAwesomeIcon className="CheckIcon" icon={faCheckCircle} />
            <FontAwesomeIcon className="EditIcon" icon={faEdit} />
            <FontAwesomeIcon className="DeleteIcon" icon={faTimesCircle} />
          </div>
        </div>
      );
    });
  };

  return (
    <div className="App">
      <div className="Container">
        {showAlert ? (
          <div className="Alert">Please Enter Valid Value</div>
        ) : null}
        <form className="AddItem">
          <h3>To Do List</h3>
          <div className="InputGroup">
            <input
              type="text"
              className="InputItem"
              placeholder="Name..."
              onChange={inputHandler}
            />
            <div className="InputGroupAppend">
              <button className="AddBtn" onClick={addHandler}>
                Add Item
              </button>
            </div>
          </div>
        </form>
        <div className="List">
          <div className="Items">{renderedList}</div>
          <button type="button" className="ClearBtn">
            Clear Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
