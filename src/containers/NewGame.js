import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";

class NewGame extends Component {
  startGame() {
    this.props.history.push("/play");
  }
  render() {
    return (
      <div className="primary-style">
        <h1>Choose a Category</h1>
        <div>
          <Button onClick={() => this.startGame()}>Memes</Button>
          <div>
            <h1>Other Options Coming Soon!</h1>
            <Button onClick={() => this.startGame()}>HP Characters</Button>
            <Button onClick={() => this.startGame()}>Historical Figures</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewGame;
