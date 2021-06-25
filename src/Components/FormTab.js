import React, { Component } from "react";
import { Link } from "react-router-dom";
import PaintPots from "./PaintPots";
import FirebaseContext from "../Firebase/context";

export default class FormTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      paintbrush: "empty",
      swatchColours: [],
      invalidFormName: false,
      invalidFormSwatches: false,
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.changePaint = this.changePaint.bind(this);
    this.handleSwatchClick = this.handleSwatchClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidUpdate(prevProps) {
    if (prevProps.datesLabels.length !== this.props.datesLabels.length) {
      this.setState({
        // set all to default empty
        swatchColours: this.props.datesLabels.map(() => "empty"),
      });
    }
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  changePaint(newPaint) {
    if (newPaint !== null) {
      this.setState({
        paintbrush: newPaint,
      });
    }
  }

  handleSwatchClick(event, swatchIndex) {
    let swatchColoursCopy = [...this.state.swatchColours];
    swatchColoursCopy[swatchIndex] = this.state.paintbrush;

    this.setState({
      swatchColours: swatchColoursCopy,
    });

    // help prompt if the user hasn't selected a paint colour
    if (this.state.paintbrush == "empty") {
      var el = document.getElementById("paint-pots");
      el.classList.add("reminder-flash");

      setTimeout(function() {
        el.classList.remove('reminder-flash');
    }, 500);
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    let nameProvided = this.state.name != "";
    let allAnswered = this.state.swatchColours.every((answer) => answer !== "empty");
    let validForm = (nameProvided && allAnswered);

    this.setState({
      invalidFormName: !nameProvided,
      invalidFormSwatches: !allAnswered,
    });

    if (validForm) {
      const firebase = this.context;
      const db = firebase.firestore;
      let swatchesRef = db.collection("swatches");

      swatchesRef.add({
        name: this.state.name,
        answers: this.state.swatchColours,
        canvasRef: this.props.match.params.code,
        createdBy: "",
        createdAt: firebase.serverTimestamp(),
      });
      this.props.history.push(this.props.location.pathname + "?results");
    }
  }

  render() {
    return (
      <form className={`formTab ${this.props.isResultsTab ? '' : 'showForm'}`} onSubmit={this.handleSubmit}>

        <div className="tab tab-right">
            <Link className="tab-link" to={location => `${location.pathname}?results`}>go to results</Link>
        </div>

        <label className="heading" htmlFor="name">Enter your name</label>
        <input
            type="text" id="name" name="name"
            value={this.state.name}
            onChange={this.handleNameChange}
            onKeyDown={(event) => {
              if (event.keyCode == 13) {
                event.preventDefault();
                event.target.blur();
                return false;
              }
            }}/>

        <label id="pick-a-colour-label" className="heading" htmlFor="paints">Pick a colour</label>

        <PaintPots parentChangePaintCallback = {this.changePaint}/>

        <label className="heading" htmlFor="card">and paint your card</label>

        <div className="scrollable-area">
          <div className="swatch-card">
            <div className="signature-area">
              <p className="signature">{this.state.name}</p>
            </div>

            {this.props.datesLabels.map((date, i) => {
              return (
                <div key={i} className="swatch-area">
                  <button
                    type="button"
                    key={i}
                    name={"button-" + i}
                    onClick={(e) => this.handleSwatchClick(e, i)}
                    className={`swatch swatch-colour-${this.state.swatchColours[i]}`}
                  >
                    <span className={`button-droplet-${this.state.swatchColours[i]}`}></span>
                  </button>

                  <p className="day">{date.day}</p>
                  <p className="date">{date.date} {date.month}</p>
                </div>
              );
            })}
          </div>
        </div>

        { this.state.invalidFormName && <label className="heading validation-message">Please provide your name</label> }
        { this.state.invalidFormSwatches && <label className="heading validation-message">Please fill out the full card</label> }

        <button type="submit" className="button">SUBMIT</button>
      </form>
    );
  }
}

FormTab.contextType = FirebaseContext;
