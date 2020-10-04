import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Todo = ({ todo }) => {
  const { deleteTodo } = useContext(GlobalContext);
  const status = todo.isCompleted
    ? "row border-left border-success"
    : "row border-left border-danger";
  console.log("todo in toto: ", todo);
  return (
    <li className="list-group-item text-left shadow mb-2 rounded">
      <div className={status}>
        <div className="col-sm-8">
          <p>{todo.title}</p>
        </div>
        <div className="col-sm-4">
          <span className="float-right">
            <button
              type="button"
              className="btn btn-outline-warning"
              onClick={() => deleteTodo(todo._id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-outline-danger ml-1"
              onClick={() => deleteTodo(todo._id)}
            >
              x
            </button>
          </span>
        </div>
      </div>
    </li>
  );
};

export default Todo;
