import React from "react";
import { Link } from 'react-router-dom';
const myStyle = {
  color: "#fffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
}

const Feed = () => {
  return (
    <div className="container" style={myStyle}>
        This is the Feed Page! Feed me!<br /><br />

        <Link to="/team/1">Go to Team 1</Link><br /><br />
        <Link to="/user/1">Go to User 1</Link>
    </div>
  );
};

export default Feed;
