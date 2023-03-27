import React from "react";
import {Image} from "@chakra-ui/react";

const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  height: "100vh"

}

const LandingPage = () => {
  return (
    <div className="container" style={myStyle}>
      <h1>Welcome to Knockout! Time to get playing</h1>
      <Image
        className="knockoutgif"
        src={require("../images/knockout.gif")}
        alt="homegif"
      />
    </div>
  );
};

export default LandingPage;
