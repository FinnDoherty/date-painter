import { Button, Container, TextField } from "@material-ui/core";
import mnemonicWords from "mnemonic-words";
import React, { Component } from "react";
import { Calendar } from "react-multi-date-picker";

export default class BlankCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      expectedNumberOfSwatches: 6,
      code: "",
    };
    this.setDates = this.setDates.bind(this);
    this.generateCode = this.generateCode.bind(this);
    this.setexpectedNumberOfSwatches = this.setexpectedNumberOfSwatches.bind(
      this
    );
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.generateCode();
  }

  generateCode() {
    let codeWords = [];

    for (let i = 0; i < 3; i++) {
      codeWords.push(
        mnemonicWords[Math.floor(Math.random() * mnemonicWords.length)]
      );
    }

    this.setState({
      code: codeWords.join("-"),
    });
  }

  setDates(value) {
    this.state.dates = value.map((date) => date.toDate());
  }

  setexpectedNumberOfSwatches(event) {
    this.setState({
      expectedNumberOfSwatches: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const firebase = this.props.firebase;
    const db = firebase.firestore;
    let canvasesRef = db.collection("canvases");

    canvasesRef.add({
      dates: this.state.dates,
      expectedNumberOfSwatches: this.state.expectedNumberOfSwatches,
      code: this.state.code,

      createdBy: "",
      createdAt: firebase.serverTimestamp(),
    });

    this.props.history.push("/" + this.state.code);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>


          <h3>Generate a unique code for this poll</h3>
          <TextField value={this.state.code} />
          <Button
            variant="contained"
            color="primary"
            onClick={this.generateCode}
          >
            Generate
          </Button>
          <br />

          <h3>How many people are invited?</h3>
          <TextField
            type="number"
            value={this.state.expectedNumberOfSwatches}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={this.setexpectedNumberOfSwatches}
          />
          <br />
          <h3>Choose possible dates</h3>
          <Calendar value={this.state.dates} onChange={this.setDates} />
          <br />
          <div style={{ overflow: "hidden" }}>
            <Button
              type="submit"
              style={{ float: "right" }}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button>
          </div>
        </Container>
      </form>
    );
  }
}
