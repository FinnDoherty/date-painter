import React, { Component } from "react";
import Canvas from "./Canvas";
import FirebaseContext from "../Firebase/context";

export default class ExistingCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: this.props.match.params.code,
      isResultsTab: false,
    };
  }

  setTitle() {
    var codeAbbreviated = this.props.match.params.code.match(/\b(\w)/g).join('');
    var resultsTab = this.props.location.search === "?results";

    document.title = `Date Painter - ${codeAbbreviated}${resultsTab ? ' results' : ''}`;
  }

  componentDidMount() {
    this.setTitle();

    this.setState({
      isResultsTab: this.props.location.search === "?results",
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.code !== this.props.match.params.code ||
      prevProps.location.search !== this.props.location.search
    ) {
      this.setTitle();

      // add code and resultsTab boolean to state
      this.setState({
        code: this.props.match.params.code,
        isResultsTab: this.props.location.search === "?results",
      });
    }
  }

  render() {
    return (
        <FirebaseContext.Consumer>
          {(firebase) => {
            return <Canvas firebase={firebase} {...this.props} code={this.state.code} isResultsTab={this.state.isResultsTab}/>;
          }}
        </FirebaseContext.Consumer>
    );
  }
}
