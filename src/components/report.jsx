import React from "react";
import Section from "./common/section";

const Report = () => {
  return (
    <Section>
      <div className="col-sm-6 border-right mt-4 mb-4">
        <p className="text-success">DONE</p>
        <h1>5</h1>
      </div>
      <div className="col-sm-6 border-left mt-4 mb-4">
        <p className="text-danger">TO DO</p>
        <h1>5</h1>
      </div>
    </Section>
  );
};

export default Report;
