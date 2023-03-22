import React from "react";
import { Link } from 'react-router-dom';
import User from './User';
  const myStyle = {
    color: "#000000",
    backgroundColor: "#373e98",
    padding: "20px",
    fontSize: "20",
    fontFamily: "Lucida Console, Monaco, monospace"

    

  }

const Profile = () => {
  return (
    <div className="container" style={myStyle}>


        <Link to="/edit_profile">Edit Profile</Link><br /><br />

        <div className="welcomeback">Welcome Back, {User}!</div>


        <div className="profilepic"><img src={Profile} alt="Profile Picture" />Profile picture goes here!</div>

        <div className="myteams">List of teams goes here:
       <li>
        <ul className="teaminfo">Team Name, your role, location</ul>

        </li> 
        </div>
    </div>
  );
};

export default Profile;
