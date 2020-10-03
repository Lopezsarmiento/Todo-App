import React from "react";
import Title from "./common/title";
import Section from "./common/section";
import Todo from "./todo";

const TodoList = () => {
  return (
    <Section>
      <Title title="History"></Title>
      <Todo></Todo>
    </Section>
  );
};

export default TodoList;
