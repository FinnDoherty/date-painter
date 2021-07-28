import mnemonicWords from "mnemonic-words";
import React, { Component } from "react";
import { Calendar } from "react-multi-date-picker";
import { FirebaseContext } from "../Firebase";
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";

export default class BlankCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dates: [],
      code: "",
      occasionName: "Weekly Games",
      invalidForm: false,
      previousCodes: [],
      codeAlreadyUsed: false,
    };
    this.setDates = this.setDates.bind(this);
    this.generateCode = this.generateCode.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeOccasionName = this.changeOccasionName.bind(this);
  }

  componentDidMount() {
    this.fetchPreviouslyUsedCodes();
    this.generateCode();

    document.title = 'Date Painter';
  }

  componentWillUnmount() {
    this.fireStoreUnsubscribe();
  }

  fetchPreviouslyUsedCodes() {
    let codes = [];

    const db = this.context.firestore;
    const q = query(collection(db, "canvases"), orderBy("code", "desc"));

    this.fireStoreUnsubscribe = onSnapshot(q, (querySnapshot) => {
        codes = querySnapshot.docs.map((doc) => doc.data().code);

        this.setState({
          previousCodes: codes,
        });
    });
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
    this.setState({
      dates: value.map((date) => date.toDate()),
    });
  }

  changeOccasionName(event) {
    this.setState({
      occasionName: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    let validForm =  this.state.dates.length > 1;
    let codeAlreadyUsed = this.state.previousCodes.includes(this.state.code);

    this.setState({
      invalidForm: !validForm,
      codeAlreadyUsed: codeAlreadyUsed,
    });

    if (validForm && !codeAlreadyUsed) {
      const db = this.context.firestore;

      addDoc(collection(db, "canvases"), {
          dates: this.state.dates,
          code: this.state.code,
          occasionName: this.state.occasionName,

          createdBy: "",
          createdAt: serverTimestamp(),
      })
      this.props.history.push("/" + this.state.code);
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="inner-container">
          <h2 className="title">Create a date poll</h2>

          <form onSubmit={this.handleSubmit}>

            <label className="heading" htmlFor="code">Generate a unique code for the event link</label>
            <input
                className="read-only-field"
                type="text" id="code" name="code"
                value={this.state.code}
                readOnly
            />
            <button
                type="button"
                className="button"
                onClick={this.generateCode}>
                  GENERATE
            </button>

            <label className="heading" htmlFor="occasionName">Give the event a title</label>
            <input
                type="text" id="occasionName" name="occasionName"
                value={this.state.occasionName}
                onChange={this.changeOccasionName}
                onKeyDown={(event) => {
                  if (event.keyCode == 13) {
                    event.preventDefault();
                    event.target.blur();
                    return false;
                  }
                }}/>

            <label className="heading" htmlFor="calendar">Choose possible dates</label>
            <Calendar
                value={this.state.dates}
                onChange={this.setDates}
                sort
                weekStartDayIndex={1}
                className="teal"
            />

            { this.state.invalidForm && <label className="heading validation-message">Please select at least 2 dates</label> }
            { this.state.codeAlreadyUsed && <label className="heading validation-message">The random code has been used. Please generate a new code</label> }

            <button type="submit" className="button">SUBMIT</button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
BlankCanvas.contextType = FirebaseContext;
