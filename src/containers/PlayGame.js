import React, { Component } from "react";
import "../App.css";
import Board from "./Board";
class PlayGame extends Component {
  render() {
    return (
      <div className="primary-style">
        <Board player="Your"/>
        <Board player="Their"/>
      </div>
    );
  }
}

export default PlayGame;
