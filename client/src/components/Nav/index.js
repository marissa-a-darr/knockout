import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Logo from "../../logo.jpg";

const navStyle = {
  color: "#fffff",
  backgroundColor: "#000000",
  padding: "5px",
  fontSize: "30px",
  fontFamily: "Lucida Console, Monaco, monospace",


}



function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return ( 
      
        <ul>
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul>
          <li>
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="header">
      <h1>
        <Link to="/" >
      <img src={Logo}  class="center"/>
        </Link>

      </h1>

      <nav style={navStyle} >
        {showNavigation()}
      </nav>
    </header>
 
  );
}

export default Nav;
