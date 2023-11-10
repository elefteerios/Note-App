import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Title_Bar from "./Title_Bar.js";
import Container from "./Container.js";

ReactDOM.render(
  <React.StrictMode>
    <Title_Bar />
    <Container />
  </React.StrictMode>,
  document.getElementById("root")
);
