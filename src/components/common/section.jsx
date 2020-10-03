import React from "react";

const Section = (props) => {
  return (
    <div className="row d-flex justify-content-center text-center shadow rounded mb-4">
      {props.children}
    </div>
  );
};

export default Section;
