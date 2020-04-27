import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";

class NewGame extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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

export default NewGame;
