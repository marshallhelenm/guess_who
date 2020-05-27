import React from "react";
import Stub from "../../components/Stub";
import "./board.css";
import Columns from "react-columns";

// holds all the picture cards
const Board = (props) => {
  const generateCards = () => {
    let memes = props.items || [];

    let cards = memes.map((item) => {
      return (
        <Stub
          item={item}
          key={item.title + "." + Math.random() * 10}
          class="stub"
        />
      );
    });
    return cards;
  };

  let queries = [{
    columns: 4,
    query: 'min-width: 800px'
  }];

  return (
    <>
      <div className="board-page">
        <h1>{props.player} Board</h1>
        <Columns className="ui board" gap="1%" queries={queries}>{generateCards()}</Columns>
      </div>
      {/* in future a way to render the names of the player? Maybe more effort than it's worth */}
    </>
  );
};

export default Board;
