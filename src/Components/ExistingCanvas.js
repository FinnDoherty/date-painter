import React, { Component } from "react";
import FirebaseContext from "../Firebase/context";
import DateUtils from "../Utils/DateUtils";
import FormTab from "./FormTab";
import ResultsTab from "./ResultsTab";
import { collection, query, where, orderBy, onSnapshot, getDocs } from "firebase/firestore";
import { IoCopy } from 'react-icons/io5';

export default class ExistingCanvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isResultsTab: false,
      occasionName: "",
      datesLabels: [],
      submittedSwatchCards: [],
    };
  }

  componentDidMount() {
    this.setTitle();

    this.setState({
      isResultsTab: this.props.location.search === "?results",
    });

    this.fetchCanvasDetails();
    this.fetchCompletedSwatchCards();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.code !== this.props.match.params.code) {
      // reset
      this.fireStoreUnsubscribe();
      this.setState({
        occasionName: "",
        datesLabels: [],
        swatchColours: [],
        submittedSwatchCards: [],
      });

      this.fetchCanvasDetails();
      this.fetchCompletedSwatchCards();
    }

    if (
      prevProps.match.params.code !== this.props.match.params.code ||
      prevProps.location.search !== this.props.location.search
    ) {
      this.setTitle();

      // add code and resultsTab boolean to state
      this.setState({
        isResultsTab: this.props.location.search === "?results",
      });
    }
  }

  componentWillUnmount() {
    this.fireStoreUnsubscribe();
  }

  setTitle() {
    var codeAbbreviated = this.props.match.params.code.match(/\b(\w)/g).join('');
    var resultsTab = this.props.location.search === "?results";

    document.title = `Date Painter - ${codeAbbreviated}${resultsTab ? ' results' : ''}`;
  }

  fetchCanvasDetails() {
    const db = this.context.firestore;

    // formTab - get the event details, like range of dates, to give answers to.
    const q = query(
      collection(db, "canvases"),
      where("code", "==", this.props.match.params.code)
    );

    getDocs(q)
      .then((doc) => {
        if (doc.docs.length === 1) {
          let canvas = doc.docs[0].data();

          this.setState({
            occasionName: canvas.occasionName,
            datesLabels: canvas.dates.map(DateUtils.dateObjectToReadableLabels),
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

  fetchCompletedSwatchCards() {
    let swatchCards = [];
    const db = this.context.firestore;

    // resultsTab - get the already submitted answers
    const q = query(
      collection(db, "swatches"),
      where("canvasRef", "==", this.props.match.params.code),
      orderBy("createdAt", "asc")
    );

    this.fireStoreUnsubscribe = onSnapshot(q, (querySnapshot) => {
      swatchCards = querySnapshot.docs;

      this.setState({
        submittedSwatchCards: swatchCards,
      });
    });
  }

  canUseClipboard() {
    return (navigator.clipboard && navigator.clipboard.writeText);
  }

  handleCopyClick() {
    if (this.canUseClipboard()) {
      let path = (new URL(document.URL)).pathname;

      navigator.clipboard.writeText('https://datepainter.com' + path).then(() => {
        var el = document.getElementById("copied-toast");
        el.classList.add("visible");

        setTimeout(function() {
          el.classList.remove('visible');
        }, 1000);
      })
      .catch(console.error);
    }
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title">

        {this.state.occasionName}
        { this.canUseClipboard() &&
          <IoCopy className="copy-icon" onClick={() => this.handleCopyClick()}/>
        }
        </h2>

        <div id="copied-toast" className="copied-toast">Link copied to clipboard</div>

        <FormTab
          {...this.props}
          isResultsTab={this.state.isResultsTab}
          datesLabels={this.state.datesLabels}
        />
        <ResultsTab
          submittedSwatchCards={this.state.submittedSwatchCards}
          isResultsTab={this.state.isResultsTab}
          datesLabels={this.state.datesLabels}
        />
      </React.Fragment>
    );
  }
}

ExistingCanvas.contextType = FirebaseContext;
