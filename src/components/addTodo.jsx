import React, { useState, useContext } from "react";
import Title from "./common/title";
import Section from "./common/section";
import { GlobalContext } from "../context/GlobalState";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useContext(GlobalContext);

  const onSubmit = (e) => {
    // prevents page reload
    e.preventDefault();

    // creates new todo obj
    const newTodo = {
      id: "abcde",
      title: todo,
      isCompleted: false,
    };
    //save todo in state
    addTodo(newTodo);
    // clear input after submission
    setTodo("");
  };

  return (
    <Section>
      <Title title="Add new todo"></Title>
      <div className="col-sm-12">
        <form className="mb-3" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputtodo"
              aria-describedby="todo"
              placeholder="Enter task..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-info btn-lg btn-block">
            Add
          </button>
        </form>
      </div>
    </Section>
  );
};

export default AddTodo;
