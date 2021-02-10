import React from "react";

import TodoList from "./TodoList";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <div className="Container">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
