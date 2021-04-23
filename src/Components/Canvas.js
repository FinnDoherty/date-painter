import {
  Box,
  Button,
  Container,
  decomposeColor,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import React, { Component } from "react";

const mnemonicWords = require("mnemonic-words");

export class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paintbrush: "x",
      name: "",
      buttonValues: [],
      dateCount: 0,
      datesLabelsDay: [],
      datesLabelsDate: [],
    };

    this.handlePaintbrush = this.handlePaintbrush.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSwatchClick = this.handleSwatchClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const db = this.props.firebase.firestore;

    let canvasesRef = db
      .collection("canvases")
      .where("code", "==", this.props.match.params.code);
    canvasesRef
      .get()
      .then((doc) => {
        if (doc.docs.length === 1) {
          let canvas = doc.docs[0].data();

          let labelsDay = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];

          // let dateLabels =;
          this.setState({
            dateCount: canvas.dates.length,
            datesLabelsDay: canvas.dates.map(
              (d) => labelsDay[d.toDate().getDay()]
            ),
            datesLabelsDate: canvas.dates.map((d) => d.toDate().getDate()),
            buttonValues: canvas.dates.map((d) => "x"),
          });
        } else {
          console.log("No such document!");

          this.props.history.push("/404");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }

  handlePaintbrush(event, newPaintbrush) {
    if (newPaintbrush !== null) {
      this.setState({
        paintbrush: newPaintbrush,
      });
    }
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleSwatchClick(event, buttonIndex) {
    let buttonValuesCopy = [...this.state.buttonValues];
    buttonValuesCopy[buttonIndex] = this.state.paintbrush;

    this.setState({
      buttonValues: buttonValuesCopy,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const firebase = this.props.firebase;
    const db = firebase.firestore;
    let swatchesRef = db.collection("swatches");

    swatchesRef.add({
      name: this.state.name,
      answers: this.state.buttonValues,
      canvasRef: this.props.match.params.code,
      createdBy: "",
      createdAt: firebase.serverTimestamp(),
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Container>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
          <h3>Name</h3><br/>

          <TextField
            variant="outlined"
            label="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          >
            Name
          </TextField>
          </Grid>
        </Container>
        <Container style={{ height: "100px", margin: "20px 0" }}>
        <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <h3>Choose a paintbrush: </h3>
          <ToggleButtonGroup
            exclusive
            value={this.state.paintbrush}
            onChange={this.handlePaintbrush}
          >
            <ToggleButton value="x" style={{ color: "#b13e53" }}>
              x
            </ToggleButton>
            <ToggleButton value="3" style={{ color: "#ef7d57" }}>
              3
            </ToggleButton>
            <ToggleButton value="7" style={{ color: "#ffcd75" }}>
              7
            </ToggleButton>
            <ToggleButton value="9" style={{ color: "#a7f070" }}>
              9
            </ToggleButton>
          </ToggleButtonGroup>
          </Grid>
        </Container>
        <Divider />

        <Container style={{ height: "100px", margin: "20px 0" }}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Box width="20%">{""}</Box>

            {[...Array(this.state.dateCount).keys()].map((i) => {
              return (
                <Grid key={i} item xs={1}>
                  {this.state.datesLabelsDay[i]}
                  <br />
                  {this.state.datesLabelsDate[i]}
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Divider />

        <Container style={{ height: "100px", margin: "20px 0" }}>
          <h3>Paint your availability</h3>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Box width="20%">{""}</Box>

            {[...Array(this.state.dateCount).keys()].map((i) => {
              return (
                <Grid key={i} item xs={1}>
                  <Button
                    variant="contained"
                    size="small"
                    key={i}
                    name={"button-" + i}
                    onClick={(e) => this.handleSwatchClick(e, i)}
                  >
                    {this.state.buttonValues[i]}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Container>
        <Divider />

        <div style={{ overflow: "hidden" }}>
          <Button type="submit" style={{ float: "right" }} variant="contained">
            Submit
          </Button>
        </div>
        <Divider />
        <Divider />
      </form>
    );
  }
}

export default Canvas;
