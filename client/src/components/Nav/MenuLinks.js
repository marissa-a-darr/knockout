import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const MenuLinks = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated);
  console.log(user);

  if (isAuthenticated) {
    console.log(user);
    return (
      <>
        <Link to="/feed">Feed</Link>
        <Link to ="/chat">Chat</Link>
        <Link to="/profile">My Profile</Link>
        <LogoutButton />
      </>
    );
  }
    
  else {
    return <LoginButton/>;
  }
};

export default MenuLinks;