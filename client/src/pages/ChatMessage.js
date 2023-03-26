import React from "react";
import ChatPage from '../components/ChatPage';
import socketIO from 'socket.io-client';

const socket = socketIO.connect('http://localhost:3001');

const ChatMessage = () => {
  return (
    <ChatPage socket={socket} />
  );
};

export default ChatMessage;