import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client"
import "./chat.css";

const ENDPOINT = "http://localhost:5000/"

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    console.log(name, room);

    socket = io(ENDPOINT+"join")

    setName(name)
    setRoom(room)

    console.log(socket)
  }, [ENDPOINT, location.search]);
  return (
  <h1>Chat Component</h1>
  );
};

export default Chat;
