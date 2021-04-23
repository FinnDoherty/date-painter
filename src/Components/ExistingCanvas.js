import { Divider } from "@material-ui/core";
import React, { Component } from "react";
import Canvas from "./Canvas";
import DrySwatches from "./DrySwatches";
import FirebaseContext from "../Firebase/context";
import { Link } from "react-router-dom";

export default class ExistingCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: this.props.match.params.code,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.code !== this.props.match.params.code) {
      this.setState({
        code: this.props.match.params.code,
      });
    }
  }

  render() {
    return (
      <div>
        <Link to="/">(Return to create new poll)</Link>
        <br />
        <FirebaseContext.Consumer>
          {(firebase) => {
            return <Canvas firebase={firebase} {...this.props}/>;
          }}
        </FirebaseContext.Consumer>
        <Divider />
        <FirebaseContext.Consumer>
          {(firebase) => {
            return <DrySwatches firebase={firebase} {...this.props} />;
          }}
        </FirebaseContext.Consumer>
      </div>
    );
  }
}
