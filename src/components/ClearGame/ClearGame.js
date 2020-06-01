import React from "react";
import { Button } from "semantic-ui-react";
import "./ClearGame.css";

// TODO: Implement confirmation modal here 

const ClearGame = ({ name, room, fetchMemes }) => {
  const clearMemes = () => {
    localStorage.setItem("memes", JSON.stringify({ name, room, memes: [] }));
    fetchMemes()
  };

  return <Button onClick={clearMemes}>New Game</Button>;
};

export default ClearGame;
