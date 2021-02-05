import React from "react";

import Todo from "./Todo";
import "./Todo.css";

const TodoList = (props) => {
  if (Array.isArray(props.list) && props.list.length !== 0) {
    const updatedList = props.list.map((element) => {
      return <Todo element={element} />;
    });
    return <div className="TodoList">{updatedList}</div>;
  } else {
    return null;
  }
};

export default TodoList;
