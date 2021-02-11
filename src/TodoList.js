import React, { useState } from "react";

import Input from "./Input.js";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (props) => {
  const [list, setList] = useState([]);

  const addItemHandler = (input) => {
    let arr = [...list];
    arr.push({ onEdit: false, onCheck: false, value: input });
    setList(arr);
  };

  console.log(list);

  const onCheckHandler = (value) => {
    let arr = [...list];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i].value === value) {
        arr[i].onEdit = false;
        arr[i].onCheck = !arr[i].onCheck;
      }
    }

    setList(arr);
  };

  const onEditHandler = (index) => {
    let arr = [...list];
    arr[index].onCheck = false;
    arr[index].onEdit = !arr[index].onEdit;
    setList(arr);
  };

  const onDeleteHandler = (index) => {
    let arr = [...list];
    arr.splice(index, 1);
    setList(arr);
  };

  const editedInputHandler = (e) => {
    e.preventDefault();
    let arr = [...list];
    arr[props.index].value = e.target.value;
    setList(arr);
  };

  const clearBtnHandler = () => {
    setList([]);
  };

  if (Array.isArray(list) && list.length !== 0) {
    const updatedList = list.map((element, index) => {
      return (
        <Todo
          element={element}
          value={element.value}
          onCheck={element.checked}
          onEdit={element.edited}
          index={index}
          key={index}
          onCheckHandler={onCheckHandler}
          onEditHandler={onEditHandler}
          onDeleteHandler={onDeleteHandler}
          editedInputHandler={editedInputHandler}
        />
      );
    });
    return (
      <span>
        <Input addItemHandler={addItemHandler} />
        <div className="List">
          {updatedList}
          <button type="button" className="ClearBtn" onClick={clearBtnHandler}>
            Clear Items
          </button>
        </div>
      </span>
    );
  } else {
    return (
      <span>
        <Input addItemHandler={addItemHandler} />
        <div className="List">
          <button type="button" className="ClearBtn" onClick={clearBtnHandler}>
            Clear Items
          </button>
        </div>
      </span>
    );
  }
};

export default TodoList;
