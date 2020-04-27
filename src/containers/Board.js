import React, { Component } from "react";
import Stub from "../components/Stub";

class Board extends Component {
  generateCards() {
    let cards = this.props.items.map((item) => {
      console.log("item: ", item);
      return (
        <Stub
          handleClick={this.clickCard}
          img={item}
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
