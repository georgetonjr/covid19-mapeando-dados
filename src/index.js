import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWork from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWork.register();
