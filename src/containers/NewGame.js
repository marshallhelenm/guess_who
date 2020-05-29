import React, { Component } from "react";
import "../App/App.css";
import { Button } from "semantic-ui-react";
import Join from "../components/Join/Join";

class NewGame extends Component {
  startGame() {
    this.props.history.push("/play");
  }
  render() {
    return (
      <div className="primary-style">
        <Join />
      </div>
    );
  }
}

export default NewGame;



{/* <h1>Choose a Category</h1>
        <div>
          <Button onClick={() => this.startGame()}>Memes</Button>
          <div>
            <h1>Other Options Coming Soon!</h1>
            <Button onClick={() => this.startGame()}>HP Characters</Button>
            <Button onClick={() => this.startGame()}>Historical Figures</Button>
          </div>
        </div> */}