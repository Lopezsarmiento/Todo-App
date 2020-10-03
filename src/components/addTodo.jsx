import React from "react";
import Title from "./common/title";
import Section from "./common/section";

const AddTodo = () => {
  return (
    <Section>
      <Title title="Add new todo"></Title>
      <div className="col-sm-12">
        <div className="input-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="type in"
            aria-label="todo with one button addons"
            aria-describedby="button-addon4"
          />
          <div className="input-group-append" id="button-addon4">
            <button className="btn btn-info" type="button">
              Add todo
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AddTodo;
