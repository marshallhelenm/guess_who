import React, { Route, Component } from "react";
import "./App.css";
import LandingPage from "./containers/LandingPage";
import NewGame from "./containers/NewGame";
import PlayGame from "./containers/PlayGame";
import { BrowserRouter as Router } from "react-router-dom";

class Guessy extends Component {
  render(props) {
    console.log("Guessy Props: ", props);
    return (
      <div className="App">
        <LandingPage {...props} />
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
