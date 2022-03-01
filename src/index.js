import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Grommet } from "grommet";
import App from "./app";
import { theme } from "./theme"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Grommet theme={theme} full>
        <App />
      </Grommet>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
