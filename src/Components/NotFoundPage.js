import { Divider } from "@material-ui/core";
import React, { Component } from "react";
import Canvas from "./Canvas";
import { Link } from "react-router-dom";

export default class NotFoundPage extends Component {
  render() {
    return (
      <div>
        404, Matching code not found <br/>
        <Link to="/">(Return to create new poll)</Link>
      </div>
    );
  }
}