import { Container, Divider } from "@material-ui/core";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExistingCanvas from "./Components/ExistingCanvas";
import BlankCanvasWrapper from "./Components/BlankCanvasWrapper";
import NotFoundPage from "./Components/NotFoundPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <header>
            <h1>Date Painter Web</h1>
          </header>
          <Switch>
            <Route exact path="/" component={BlankCanvasWrapper} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/:code" component={ExistingCanvas} />

            <Route path="*"  component={NotFoundPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
