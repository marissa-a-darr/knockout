import React from "react";
import { Link } from 'react-router-dom';
import User from './User';
//style for profile page
  const myStyle = {
    color: "#FFFFFF",
    backgroundColor: "#000000",
    padding: "20px",
    fontSize: "20px",
    fontFamily: "Lucida Console, Monaco, monospace",

  }
  

const Profile = () => {
  return (
    <div className="container" style={myStyle}>


        <Link to="/edit_profile">Edit Profile</Link><br /><br />

        <div className="welcomeback">Welcome Back, {User}!</div>


        <div className="profilepic"><img src={Profile} alt="Profile Picture" /></div>

        <div className="myteams">List of teams goes here:
       <li>
        <ul className="teaminfo">Team Name, your role, location</ul>

        </li> 
        </div>
    </div>
  );
};

export default Profile;
