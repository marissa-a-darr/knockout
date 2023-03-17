import React from "react";
import { Link } from 'react-router-dom';
import User from './User';

const Profile = () => {
  return (
    <div className="container">
        This is the Profile Page!<br /><br />

        <Link to="/edit_profile">Edit Profile</Link><br /><br />

        <div className="welcomeback">Welcome Back, {User}!</div>


        <div className="profilepic">profile picture goes here</div>

        <div className="myteams">List of teams goes here:
       <li>
        <ul className="teaminfo">Team Name, your role, location</ul>

        </li> 
        </div>
    </div>
  );
};

export default Profile;
