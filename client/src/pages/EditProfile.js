import React from "react";
import { Link } from "react-router-dom";

const EditProfile = () => {
  return (
    <div className="container">
        This is the Edit Profile Page!<br /><br />
        <Link to="/profile">Save Profile</Link><br /><br />
    </div>
  );
};

export default EditProfile;
