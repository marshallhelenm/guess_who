import React, { Component } from "react";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import NewGame from "./containers/NewGame";
import PlayGame from "./containers/PlayGame";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Guessy extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log("Guessy Props: ", this.props);
    return (
      <div className="primary-style">
        <Router>
          <Route
            path="/"
            exact
            render={(props) => <LandingPage {...props} />}
          />
          <Route path="/new_game" render={(props) => <NewGame {...props} />} />
          <Route path="/play" render={(props) => <PlayGame {...props} />} />
        </Router>
      </div>
    );
  }
}

export default Guessy;
