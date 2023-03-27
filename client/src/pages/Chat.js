import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import ChatPage from '../components/ChatContatiner/ChatPage';
import socketIO from 'socket.io-client';
// import NewWindow from 'react-new-window';

const socket = socketIO.connect('http://localhost:3001');
// window.addEventListener("beforeunload", (ev) => 
// {  
//     console.log("window is being close");
//   ev.preventDefault();
//     return ev.returnValue = 'Are you sure you want to close?';
// });

const Chat = () => {
  const {user} = useAuth0();
  const [userName, setUserName] = useState('');
  console.log(user);
  localStorage.setItem('userName', user.nickname);
  useEffect(()=>{
		setUserName(user.nickname);
	}, [user.nickname]);

  socket.emit('newUser', { userName, socketID: socket.id });
  
  return (
    // <NewWindow>
        <ChatPage socket={socket} />
    // </NewWindow>
  );
};

export default Chat;