import React, { useState } from "react";

import Input from "./Input.js";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = (props) => {
  const [list, setList] = useState([]);
  const [editedInput, setEditedInput] = useState("");

  const addItemHandler = (input) => {
    let arr = [...list];
    arr.push({ onEdit: false, onCheck: false, value: input });
    setList(arr);
  };

  const onCheckHandler = (index) => {
    let arr = [...list];
    arr[index].onEdit = false;
    arr[index].onCheck = !arr[index].onCheck;
    setList(arr);
  };

  const onEditHandler = () => {
    let arr = [...list];
    arr[props.index].onCheck = false;
    arr[props.index].onEdit = !arr[props.index].onEdit;
    setList(arr);
  };

  const onDeleteHandler = () => {
    let arr = [...list];
    arr.splice(props.index, 1);
    setList(arr);
  };

  const clearBtnHandler = () => {
    setList([]);
  };

  const editedInputHandler = (e) => {
    e.preventDefault();
    let arr = [...list];
    arr[props.index].value = e.target.value;
    setList(arr);
  };

  if (Array.isArray(list) && list.length !== 0) {
    const updatedList = list.map((element, index) => {
      return (
        <Todo
          list={list}
          element={element}
          value={element.value}
          onCheck={element.checked}
          onEdit={element.edited}
          index={index}
          key={index}
          onCheckHander={onCheckHandler}
          onEditHander={onEditHandler}
          onDeleteHandler={onDeleteHandler}
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
