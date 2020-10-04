import React, { useContext } from "react";
import Section from "./common/section";
import { GlobalContext } from "../context/GlobalState";

const Report = () => {
  // retrieve state from context
  const { todos } = useContext(GlobalContext);
  // get pendings and completed
  const done = todos.filter((todo) => todo.isCompleted === true).length;
  const pending = todos.filter((todo) => todo.isCompleted === false).length;

  return (
    <Section>
      <div className="col-sm-6 border-right mt-4 mb-4">
        <p className="text-success">DONE</p>
        <h1>{done}</h1>
      </div>
      <div className="col-sm-6 border-left mt-4 mb-4">
        <p className="text-danger">TO DO</p>
        <h1>{pending}</h1>
      </div>
    </Section>
  );
};

export default Report;
