import React, { Component } from "react";
import { Link } from "react-router-dom";
import ResultsTab from "./ResultsTab";

import PaintPots from "./PaintPots";

export class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paintbrush: "empty",
      name: "",
      buttonValues: [],
      dateCount: 0,
      datesLabelsDay: [],
      datesLabelsDate: [],
      datesLabelsMonth: [],
      submittedSwatchCards: [],
      invalidForm: false,
    };

    this.changePaint = this.changePaint.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSwatchClick = this.handleSwatchClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const db = this.props.firebase.firestore;

    // formTab get the event details, like range of dates, to give answers to.
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

          const labelsMonth = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ];

          this.setState({
            dateCount: canvas.dates.length,
            datesLabelsDay: canvas.dates.map(
              (d) => labelsDay[d.toDate().getDay()]
            ),
            datesLabelsDate: canvas.dates.map((d) => d.toDate().getDate()),
            datesLabelsMonth: canvas.dates.map(
              (d) => labelsMonth[d.toDate().getMonth()]
            ),
            buttonValues: canvas.dates.map((d) => "empty"),
          });
        } else {
          console.log("No such document!");

          this.props.history.push("/404");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

      // restultsTab, get the already submitted answers
      let swatchesRef = db
        .collection("swatches")
        .where("canvasRef", "==", this.props.match.params.code);
      let swatchCards = [];

      this.fireStoreUnsubscribe = swatchesRef.onSnapshot((querySnapshot) => {
        swatchCards = querySnapshot.docs;

        this.setState({
          submittedSwatchCards: swatchCards,
        });
      });
  }

  componentWillUnmount() {
    this.fireStoreUnsubscribe();
  }

  changePaint(newPaint) {
    if (newPaint !== null) {
      this.setState({
        paintbrush: newPaint,
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
    let allAnswered = this.state.buttonValues.every((answer) => answer !== "empty");
    let validForm = (nameProvided && allAnswered);

    this.setState({
      invalidForm: !validForm,
    })

    if (validForm) {
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
      this.props.history.push(this.props.location.pathname + "?results");
    }
  }

  render() {
    return (
      <div>
        <h2 className="heading title">Event Title Goes Here</h2>

        <form className={`formTab ${this.props.isResultsTab ? '' : 'showForm'}`} onSubmit={this.handleSubmit}>

          <div className="tab tab-right">
              <Link className="tab-link" to={location => `${location.pathname}?results`}>go to results</Link>
          </div>


          <label className="heading" htmlFor="name">Enter your name</label>
          <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleNameChange}/>

          <label id="pick-a-colour-label" className="heading" htmlFor="paints">Pick a colour</label>

          <PaintPots parentChangePaintCallback = {this.changePaint}/>

          <label className="heading" htmlFor="card">and paint your card</label>

          <div className="scrollable-area">
            <div className="swatch-card">
              <div className="signature-area">
                <p className="signature">{this.state.name}</p>
              </div>

              {[...Array(this.state.dateCount).keys()].map((i) => {
                return (
                  <div key={i} className="swatch-area">
                    <button
                      type="button"
                      key={i}
                      name={"button-" + i}
                      onClick={(e) => this.handleSwatchClick(e, i)}
                      className={`swatch swatch-colour-${this.state.buttonValues[i]}`}
                    >
                      <span className={`button-droplet-${this.state.buttonValues[i]}`}></span>
                    </button>

                    <p className="day">{this.state.datesLabelsDay[i]}</p>
                    <p className="date">{this.state.datesLabelsDate[i]} {this.state.datesLabelsMonth[i]}</p>
                  </div>
                );
              })}
            </div>
          </div>

          { this.state.invalidForm && <label className="heading validation-message">Please provide a name and fill the full card</label> }

          <button type="submit" className="button">SUBMIT</button>
        </form>

        <ResultsTab
            submittedSwatchCards={this.state.submittedSwatchCards}
            isResultsTab={this.props.isResultsTab}
            datesLabelsDay={this.state.datesLabelsDay}
            datesLabelsDate={this.state.datesLabelsDate}
            datesLabelsMonth={this.state.datesLabelsMonth}
        />

      </div>
    );
  }
}

export default Canvas;
