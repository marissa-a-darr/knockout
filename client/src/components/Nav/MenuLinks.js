import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import MenuItem from "./MenuItem";
import { useAuth0 } from "@auth0/auth0-react";

const MenuLinks = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated);

  if (user) { 
     console.log(user)
  }
  const loggedIn = isAuthenticated;

    if (loggedIn) {
      return (
        <>
          <MenuItem to="/feed" linkName="Feed"></MenuItem>
          <MenuItem to ="/chat" linkName="Chat"></MenuItem>
          <MenuItem to ="/chat-message" linkName="ChatMessage"></MenuItem>
          <MenuItem to="profile" linkName="My Profile"></MenuItem>
          <LogoutButton />
        </>
      );
    } else {
      return <LoginButton/>;
    }
};
export default MenuLinks;
