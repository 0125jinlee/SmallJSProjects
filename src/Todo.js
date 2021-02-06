import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Todo.css";

const Todo = (props) => {
  const [checked, setChecked] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  const checkHandler = () => {
    setEditClicked(false);
    setChecked(!checked);
  };

  const editHandler = () => {
    setChecked(false);
    setEditClicked(!editClicked);
  };

  const editedInputHandler = (e) => {
    e.preventDefault();
    let arr = [
      ...props.list,
      (props.list[props.element.indexOf()] = e.target.value),
    ];
    props.setList(arr);
  };

  return (
    <div className="TodoItem">
      <h5
        style={
          checked ? { color: "gray", textDecorationLine: "line-through" } : null
        }
      >
        {editClicked ? (
          <input
            type="text"
            className="EditItem"
            placeholder={props.element}
            onSubmit={editedInputHandler}
          />
        ) : (
          props.element
        )}
      </h5>
      <div className="TodoItemIcons">
        <FontAwesomeIcon
          className="CheckIcon"
          icon={faCheckCircle}
          onClick={checkHandler}
          style={checked ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="EditIcon"
          icon={faEdit}
          onClick={editHandler}
          style={editClicked ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="DeleteIcon"
          icon={faTimesCircle}
          onClick={props.deleteHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
