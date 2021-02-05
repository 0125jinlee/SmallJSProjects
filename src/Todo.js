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
    <div className="TodoItem" key={props.element}>
      <h5>{props.element}</h5>
      <div className="TodoItemIcons">
        <FontAwesomeIcon className="CheckIcon" icon={faCheckCircle} />
        <FontAwesomeIcon className="EditIcon" icon={faEdit} />
        <FontAwesomeIcon className="DeleteIcon" icon={faTimesCircle} />
      </div>
    </div>
  );
};

export default Todo;
