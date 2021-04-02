import React, { Component } from "react";
import Canvas from "./Components/Canvas";
import DrySwatches from "./Components/DrySwatches";
import FirebaseContext from "./Firebase/context";

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Date Painter Web</h1>
        </header>
        <Canvas></Canvas>

        <FirebaseContext.Consumer>
          {(firebase) => {
            return <DrySwatches firebase={firebase} />;
          }}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}

export default App;
