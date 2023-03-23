import React from "react";
import { Link } from "react-router-dom";
const myStyle = {
  color: "#fffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
height: "100%"
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
