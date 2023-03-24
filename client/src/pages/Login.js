import React from "react";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  height: "100vh"

//   onClickHandler() {
//     Auth.login();
//   }
  
  onClickHandler() {
    Auth.login();
  }
  
  render () {
    return (
        <div className="container" style={myStyle}>
            This is the Login Page!<br /><br />

            <button onClick={this.onClickHandler}>Login</button><br /><br />
        </div>
    );
  }
};

// export default Login;
