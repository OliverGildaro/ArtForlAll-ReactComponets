import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Docs from "./docs/Docs";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/highlight.js/styles/ocean.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./custom.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Docs />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
