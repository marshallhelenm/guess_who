import React from "react";
import Stub from "../components/Stub";
import "../css/board.css";

// holds all the picture cards
const Board = (props) => {
  const generateCards = () => {
    let memes = props.items || [];
    // console.log("memes in board: ", memes);

    let cards = memes.map((item) => {
      // console.log("item: ", item);
      return (
        <Stub
          item={item}
          key={item.title + "." + Math.random() * 10}
          id={item.id}
          class="stub"
        />
      );
    });
    return cards;
  };

  return (
    <>
      <div className="board-page">
        <h1>{props.player} Board</h1>
        <div className="ui four cards board">{generateCards()}</div>
      </div>
      {/* in future a way to render the names of the player? Maybe more effort than it's worth */}
    </>
  );
};

export default Board;
