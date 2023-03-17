import React from "react";
import { Link, useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();

  return (
    <div className="container">
        This is the User Page for user {userId}! Pic, Username, Zipcode, and Bio are coming soon.<br /><br />

        <Link to="/chat">Message Me</Link>
    </div>
  );
};

export default User;
