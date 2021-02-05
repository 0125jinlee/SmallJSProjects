import React, { useState } from "react";

import TodoList from "./TodoList";
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
    }
  };
  console.log(list);

  const clearBtnHandler = () => {
    setList([]);
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
          <TodoList list={list} />
          <button type="button" className="ClearBtn" onClick={clearBtnHandler}>
            Clear Items
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
