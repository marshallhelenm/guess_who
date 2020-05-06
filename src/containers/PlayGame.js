import React, { Component } from "react";
import "../App.css";
import Board from "./Board";

//the page you see while actually playing the game
class PlayGame extends Component {
  constructor() {
    super();
    this.state = {};
  }

  fetchMemes() {
    console.log("accessing my api");
    fetch("http://localhost:5000/memes")
      .then((res) => res.json())
      .then((memes) => {
        localStorage.setItem("memes", JSON.stringify(memes));
        this.setState({ memes: memes });
      });
  }

  componentDidMount() {
    this.fetchMemes();
  }

  render() {
    return (
      <div className="primary-style">
        <Board items={this.state.memes || []} />
      </div>
    );
  }
}

export default PlayGame;
