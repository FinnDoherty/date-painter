import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SubmittedSwatchCards extends Component {
  render() {
    return (
      <div className={`resultsTab ${this.props.isResultsTab ? 'showResults' : ''}`} >

        <div className="tab tab-left">
          <Link className="tab-link" to={location => `${location.pathname}`}>add a card</Link>
        </div>
        {/* todo make this refresh the page to empty */}

        <div className="scrollable-area">
          { this.props.submittedSwatchCards.map((doc, j) => {
            return (

            <div key={j} className="swatch-card" style={{ "--cardorder": j}}>

              <div className="signature-area">
                <p className="signature">{doc.data().name}</p>
              </div>

              {doc.data().answers.map((answer, i) => {
                return (
                  <div key={i} className="swatch-area">
                    <div
                      key={i}
                      className={`swatch swatch-colour-${answer}`}
                    >
                    </div>

                    <p className="day">{this.props.datesLabelsDay[i]}</p>
                    <p className="date">{this.props.datesLabelsDate[i]} {this.props.datesLabelsMonth[i]}</p>
                  </div>
                );
              })}
            </div>
          )})}
        </div>
      </div>
    );
  }
}

export default SubmittedSwatchCards;
