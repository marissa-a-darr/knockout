import React from "react";
import { Link } from "react-router-dom";
const myStyle = {
  color: "#000000",
  backgroundColor: "#373e98",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
}
const EditProfile = () => {
  return (
    <div className="container" style={myStyle}>
        This is the Edit Profile Page!<br /><br />
        <Link to="/profile">Save Profile</Link><br /><br />
    </div>
  );
};

export default EditProfile;
