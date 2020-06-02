import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "semantic-ui-react";
import "./Join.css";

const Join = ({history}) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

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
        <Link
          onClick={(e) => {
            if (!name || !room) e.preventDefault();
          }}
          to={`/play?name=${name}&room=${room}`}
        >
          <Button type="submit">Sign In</Button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
