import React from "react";
import { Link, useParams } from 'react-router-dom';

const Team = () => {
  const { teamId } = useParams();

  return (
    <div className="container">
        This is the Team Page for Team {teamId}!<br /><br />

        <Link to="/edit_team/1">Edit Team 1</Link><br /><br />
        <Link to="/chat">Team Chat</Link><br /><br />
    </div>
  );
};

export default Team;
