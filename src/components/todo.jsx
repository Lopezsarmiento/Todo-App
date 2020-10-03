import React from "react";

const Todo = () => {
  return (
    <div className="col-sm-12">
      <div className="input-group mb-2">
        <div className="input-group-prepend" id="button-addon4">
          <button className="btn btn-danger" type="button">
            X
          </button>
        </div>
        <input
          type="text"
          className="form-control"
          value="buy milk"
          aria-label="Recipient's username with two button addons"
          aria-describedby="button-addon4"
        />
        <div className="input-group-append" id="button-addon4">
          <button className="btn btn-warning" type="button">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
