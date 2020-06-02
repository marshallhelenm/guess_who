import React, { useState, useEffect } from "react";
import queryString from "query-string";
import "../../App/App.css";
import "./PlayGame.css";
import Board from "../Board/Board.js";
import QuestionsModal from "../../components/QuestionsModal";
import {Chat} from "../../components/Chat/Chat";
import ClearGame from "../../components/ClearGame/ClearGame";

//the page you see while actually playing the game
const PlayGame = (props) => {
  const [memeCollection, setMemes] = useState({});

  const { name, room } = queryString.parse(props.location.search);

  const sampler = (arr) => {
    let bucket = [];
    let randomIndex;

    for (let i = 0; i < 24; i++) {
      randomIndex = Math.floor(Math.random() * (arr.length - 1));
      bucket.push(arr.splice(randomIndex, 1)[0]);
    }
    return bucket;
  };

  const fetchMemes = () => {
    console.log("memeCollection: ", !memeCollection);
    let prevMemes = JSON.parse(localStorage.getItem("memes"));
    if (prevMemes && prevMemes.memes &&prevMemes.memes.length > 0) {
      setMemes(prevMemes);
    } else {
      // console.log("accessing my api");
      fetch("http://localhost:5000/memes")
        .then((res) => res.json())
        .then((memes) => {
          let sample = sampler(memes);
          setMemes({ name, room, memes: sample });
        });
    }
  };

  useEffect(() => {
    fetchMemes();
  }, []);

  useEffect(() => {
    localStorage.setItem("memes", JSON.stringify(memeCollection));
  }, [memeCollection]);

  return (
    <div className="playGame">
      <div className="gameBoard">
            <h3>Room Name: {room}</h3>
        <div class="row">
          <div class="column-md-6">
            <QuestionsModal />
          </div>
          <div class="column-md-6">
            <ClearGame name={name} room={room} fetchMemes={fetchMemes} />
          </div>
        </div>
        <Board items={memeCollection.memes || []} />
      </div>
      <div>
        <Chat {...props} />
      </div>
    </div>
  );
};

export default PlayGame;
