import React from "react";
import "./App.css";
import LandingPage from "../containers/LandingPage";
import NewGame from "../containers/NewGame";
import PlayGame from "../containers/PlayGame/PlayGame";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Chat from "../components/Chat/Chat.js";
import Join from "../components/Join/Join.js";

const Guessy = () => {
  return (
    <div>
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
