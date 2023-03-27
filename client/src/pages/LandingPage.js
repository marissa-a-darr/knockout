import React from "react";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"

}

const LandingPage = () => {
  return (
    <div className="container" style={myStyle}>
      <h1>Welcome to Knockout! Please Login</h1>
    </div>
  );
};

export default LandingPage;
