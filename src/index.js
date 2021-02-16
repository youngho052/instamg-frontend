import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "@fortawesome/fontawesome-free/js/all.js";
import "./Styles/Common.scss";
import GlobalStyle from "./Styles/GlobalStyle";
import Footer from "./Components/Footer/Footer";

ReactDOM.render(
  <>
    <GlobalStyle />
    <Routes />
    <Footer />
  </>,
  document.getElementById("root"),
);
