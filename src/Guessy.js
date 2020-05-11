import React, { Component } from "react";
import "./css/App.css";
import LandingPage from "./containers/LandingPage";
import NewGame from "./containers/NewGame";
import PlayGame from "./containers/PlayGame";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Join from "./components/Join";

const Guessy = () => {
  return (
    <div className="primary-style">
      <Router>
        <Route path="/" exact render={(props) => <LandingPage {...props} />} />
        <Route path="/new_game" render={(props) => <NewGame {...props} />} />
        <Route path="/play" render={(props) => <PlayGame {...props} />} />
        <Route path="/join" render={(props) => <Join {...props} />} />
        <Route path="/chat" render={(props) => <Chat {...props} />} />
      </Router>
    </div>
  );
};

export default Guessy;
