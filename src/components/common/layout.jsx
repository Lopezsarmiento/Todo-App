import React from "react";

const Layout = (props) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-sm-center">
        <div className="col-sm-6 mt-5 mb-5">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
