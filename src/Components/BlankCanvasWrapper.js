import { FirebaseContext } from "../Firebase";
import React, { Component } from "react";
import BlankCanvas from "./BlankCanvas";

export default class BlankCanvasWrapper extends Component {
  render() {
    return (
      <FirebaseContext.Consumer>
        {(firebase) => {
          return <BlankCanvas firebase={firebase} {...this.props} />;
        }}
      </FirebaseContext.Consumer>
    );
  }
}
