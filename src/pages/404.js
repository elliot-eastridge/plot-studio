import * as React from "react";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div>
      <h1>404</h1>
      <Link to="/">take me home!</Link>
    </div>
  );
};


export default NoMatch;
