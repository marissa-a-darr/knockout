import React from "react";
import { Link, useParams } from 'react-router-dom';
const myStyle = {
  color: "#000000",
  backgroundColor: "#373e98",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  height: "100vh"

}
const Team = () => {
  const { teamId } = useParams();

  return (
    <div className="container" style={myStyle}>
        This is the Team Page for Team {teamId}!<br /><br />

        <Link to="/edit_team/1">Edit Team 1</Link><br /><br />
        <Link to="/chat">Team Chat</Link><br /><br />
    </div>
  );
};

export default Team;
