import React, { useContext } from "react";
import {
  XCircleIcon,
  CheckCircleIcon,
  AlertIcon,
} from "@primer/octicons-react";
import { GlobalContext } from "../context/GlobalState";

const Todo = ({ todo }) => {
  const { deleteTodo, updateTodo } = useContext(GlobalContext);
  const border = todo.isCompleted
    ? "row border-left border-success"
    : "row border-left border-danger";
  const btnStatus = todo.isCompleted
    ? "btn btn-outline-warning"
    : "btn btn-outline-success";
  return (
    <li className="list-group-item text-left shadow mb-2 rounded">
      <div className={border}>
        <div className="col-sm-6">
          <p>{todo.title}</p>
        </div>
        <div className="col-sm-6">
          <span className="float-right">
            <button
              type="button"
              className={btnStatus}
              onClick={() => updateTodo(todo)}
            >
              {!todo.isCompleted && <CheckCircleIcon size={16} />}
              {todo.isCompleted && <AlertIcon size={16} />}
            </button>
            <button
              type="button"
              className="btn btn-outline-danger ml-1"
              onClick={() => deleteTodo(todo._id)}
            >
              <XCircleIcon size={16} />
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Todo;
