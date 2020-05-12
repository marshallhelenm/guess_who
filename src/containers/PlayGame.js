import React, { useState, useEffect } from "react";
import "../css/App.css";
import Board from "./Board";

//the page you see while actually playing the game
const PlayGame = () => {
  const [memeCollection, setMemes] = useState([]);

  const fetchMemes = () => {
    // console.log("accessing my api");
    fetch("http://localhost:4000/memes")
      .then((res) => res.json())
      .then((memes) => {
        localStorage.setItem("memes", JSON.stringify(memes));
        setMemes(memes);
      });
  };

  useEffect(() => {
    fetchMemes();
  }, []);
  // console.log("memes: ", memeCollection);

  return (
    <div className="primary-style">
      <Board items={memeCollection || []} />
    </div>
  );
};

export default PlayGame;
