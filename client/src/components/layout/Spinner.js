import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <img
      src={spinner}
      style={{ with: "200px", margin: "auto", display: "block" }}
      alt="Loading..."
    />
  </Fragment>
);
