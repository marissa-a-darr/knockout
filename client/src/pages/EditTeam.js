import React from "react";
import { Link, useParams } from 'react-router-dom';


const EditTeam = () => {
  const { teamId } = useParams();

  return (
    <div className="container">
        This is the Edit Team Page for the team {teamId}!<br /><br />

        <Link to="/">← Back to Feed!</Link>
    </div>
  );
};

export default EditTeam;
