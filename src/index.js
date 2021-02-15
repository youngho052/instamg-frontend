import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "@fortawesome/fontawesome-free/js/all.js";
import "./Styles/Common.scss";
import GlobalStyle from "./Styles/GlobalStyle";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
  </>,
  document.getElementById("root"),
);
