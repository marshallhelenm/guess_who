import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";

class PlayGame extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1587956910/Guessy/question-1243504_1280.png"
            alt="a question mark"
            className="App-logo"
          />
          <h1>Choose a Category</h1>
          <div>
            <Button onClick={this.startGame()}>Memes</Button>
            <Button onClick={this.startGame()}>HP Characters</Button>
            <Button onClick={this.startGame()}>Historical Figures</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default PlayGame;
