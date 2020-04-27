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
    console.log("LandingPage props: ", this.props);
    return (
        <header className="primary-style">
          <img
            src="https://res.cloudinary.com/dwfqeeh5f/image/upload/v1587956910/Guessy/question-1243504_1280.png"
            alt="a spinning question mark"
            className="Guessy-logo"
          />
          <h1>Guessy</h1>
          <Button onClick={() => this.handleClick("new")}>Play</Button>
          <Button onClick={() => this.handleClick("active")}>Join Game</Button>
        </header>
    );
  }
}

export default LandingPage;
