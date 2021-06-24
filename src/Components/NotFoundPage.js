import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  componentDidMount() {
    document.title = 'Date Painter';
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title">Sorry, the page you are looking for can't be found</h2>
        <Link className="not-found-page-link" to="/">Create a new date poll</Link>
      </React.Fragment>
    );
  }
}
