import React, { useContext, useEffect } from "react";
import Title from "./common/title";
import Section from "./common/section";
import Todo from "./todo";
import { GlobalContext } from "../context/GlobalState";

const TodoList = () => {
  const { todos, getTodos } = useContext(GlobalContext);
  console.log("todos: ", todos);
  const empty = todos.length > 0 ? false : true;

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Section>
      <Title title="History"></Title>
      {empty && <p>Nothing to do yet</p>}
      <div className="col-sm-12 mb-2">
        {todos.map((todo) => (
          <Todo key={todo._id} todo={todo}></Todo>
        ))}
      </div>
    </Section>
  );
};

export default TodoList;
