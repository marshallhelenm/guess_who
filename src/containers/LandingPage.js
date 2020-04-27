import React, { Component } from "react";
import "../App.css";
import { Button } from "semantic-ui-react";

class LandingPage extends Component {
  handleClick = (gameType) => {
    if (gameType === "new") {
      //direct to game type page
      this.props.history.push("/new_game");
    } else if (gameType === "active") {
      // direct to active game
    }
  };
  render() {
    console.log('LandingPage props: ', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <img
            src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1587956910/Guessy/question-1243504_1280.png"
            alt="a question mark"
            className="App-logo"
          />
          <h1>Guessy</h1>
          <Button onClick={this.handleClick("new")}>Play</Button>
          <Button onClick={this.handleClick("active")}>Join Game</Button>
        </header>
      </div>
    );
  }
}

export default LandingPage;
