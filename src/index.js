import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
