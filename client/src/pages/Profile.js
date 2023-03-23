import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import User from './User';

const Profile = () => {
  const {user, isAuthenticated} = useAuth0();
  return (
    isAuthenticated && (
    <div className="container">
        This is the Profile Page!<br /><br />

        <Link to="/edit_profile">Edit Profile</Link><br /><br />

        <div className="welcomeback">Welcome Back, {user.name}!</div>


        <div className="profilepic"> <img src={user.picture} alt={user.name} /></div>
        
        <div className= "useremail">{user.email}</div>

        <div className="myteams">List of teams goes here:
       <li>
        <ul className="teaminfo">Team Name, your role, location</ul>

        </li> 
        </div>
    </div>
  )
  );
};

export default Profile;
