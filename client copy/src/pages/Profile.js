import React from "react";
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="container">
        This is the Profile Page!<br /><br />

        <Link to="/edit_profile">Edit Profile</Link><br /><br />
    </div>
  );
};

export default Profile;
