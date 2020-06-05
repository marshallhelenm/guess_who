import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";
import "./Join.css";
import io from "socket.io-client";
const ENDPOINT = "http://localhost:5000/";

let socket;

const Join = ({ history }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const joinGame = () => {
    socket = io(ENDPOINT);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        console.log("error! ", error);
        history.push("join");
        alert(error);
      } else {
        history.push(`/play?name=${name}&room=${room}`);
      }
    });
  };
  // const generateRoomKey = () => {
  //   let key = Math.random().toString(36).substring(7);
  //   localStorage.setItem("roomkey", JSON.stringify({ room, key }));
  //   return key;
  // };

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Create or Join Game</h1>
        <div>
          <Input
            placeholder="Name"
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <Input
            placeholder="Room Name"
            type="text"
            onChange={(e) => {
              setRoom(e.target.value);
            }}
          />
        </div>
        <Button type="submit" onClick={joinGame}>
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Join;
