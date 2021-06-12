import React from "react";
import ReactDOM from "react-dom";
import Firebase, { FirebaseContext } from "./Firebase";
import App from "./App";
import "./styles/index.scss";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
