import React from "react";
import { Link } from 'react-router-dom';


const Feed = () => {
  return (
    <div className="container">
        This is the Feed Page! Feed me!<br /><br />

        <Link to="/team/1">Go to Team 1</Link><br /><br />
        <Link to="/user/1">Go to User 1</Link>
    </div>
  );
};

export default Feed;
