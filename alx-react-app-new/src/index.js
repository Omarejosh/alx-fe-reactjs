import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"; // Add the .jsx extension
import "./index.css"; // If you have global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

