import React from "react";
import { Link, useParams } from 'react-router-dom';
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"

}
const User = () => {
  const { userId } = useParams();

  return (
    <div className="container" style={myStyle}>
        This is the User Page for user {userId}! Pic, Username, Zipcode, and Bio are coming soon.<br /><br />

        <Link to="/chat">Message Me</Link>
    </div>
  );
};

export default User;