import React, { useState, useEffect } from 'react';
import BoxingGloves from '../Nav/BoxingGlovesImg';

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat-sidebar">
      <BoxingGloves w="200px" color={["white", "white", "primary.500", "primary.500"]} />
      <div>
        <h4 className="chat-header">ACTIVE USERS</h4>
        <div className="chat-users">
          {users.map((user) => (
            <p key={user.socketID}>{user.userName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;