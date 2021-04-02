import React from "react";
import ReactDOM from "react-dom";
import Firebase, { FirebaseContext } from "./Firebase";
import App from "./App";

ReactDOM.render(<h1>Hello world</h1>, document.querySelector("#root"));

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
