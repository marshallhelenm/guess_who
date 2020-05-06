import React, { Component } from "react";
import Stub from "../components/Stub";

// holds all the picture cards
class Board extends Component {
  generateCards() {
    let memes = this.props.items || [];
    console.log("memes in board: ", memes);


    let cards = memes.map((item) => {
      console.log("item: ", item);
      return (
        <Stub
          img={item.img}
          key={item.title + "." + Math.random() * 10}
          id={item.id}
        />
      );
    });
    return cards;
  }

  render() {
    return (
      <div>
        <div>
          <h1>{this.props.player} Board</h1>
          {this.generateCards()}
        </div>
        {/* in future a way to render the names of the player? Maybe more effort than it's worth */}
      </div>
    );
  }
}

export default Board;
