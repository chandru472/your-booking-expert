import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <div style={{ fontFamily: '"Work Sans", sans-serif' }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>,
  document.getElementById("root")
);

