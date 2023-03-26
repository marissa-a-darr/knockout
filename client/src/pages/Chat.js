import React from "react";
import Home from '../components/Home';
import socketIO from 'socket.io-client';
import NewWindow from 'react-new-window';

const socket = socketIO.connect('http://localhost:3001');

const Chat = () => {
  return (
    <NewWindow>
        <Home socket={socket} />
    </NewWindow>
  );
};

export default Chat;