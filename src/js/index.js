import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unstated";
import App from "./components/App";
import "../main.css";
import "../style.less";
import "../login.css";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("app")
);
