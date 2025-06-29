// entry point of the react application
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // strict mode is used to highlight and check for potential problems / bugs in an application
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
