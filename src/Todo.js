import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faEdit,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Todo.css";

const Todo = (props) => {
  return (
    <div className="TodoItem">
      <h5
        style={
          props.onCheck
            ? { color: "gray", textDecorationLine: "line-through" }
            : null
        }
      >
        {props.onEdit ? (
          <form onSubmit={props.onEditHandler}>
            <input type="text" className="EditItem" placeholder={props.value} />
          </form>
        ) : (
          props.index
        )}
      </h5>
      <div className="TodoItemIcons">
        <FontAwesomeIcon
          className="CheckIcon"
          icon={faCheckCircle}
          onClick={props.onCheckHandler}
          style={props.onCheck ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="EditIcon"
          icon={faEdit}
          onClick={props.onEditHandler}
          style={props.onEdit ? { opacity: "0.5" } : { opacity: "1" }}
        />
        <FontAwesomeIcon
          className="DeleteIcon"
          icon={faTimesCircle}
          onClick={props.onDeleteHandler}
        />
      </div>
    </div>
  );
};

export default Todo;
