import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import MenuItem from "./MenuItem";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
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
        <BrowserRouter basename={"/"}>
           <MenuItem to="/feed" linkName="Feed"></MenuItem>
            <MenuItem to ="/chat" linkName="Chat"></MenuItem>
            <MenuItem to="profile" linkName="My Profile"></MenuItem>
        </BrowserRouter>
          <LogoutButton />
        </>
      );
    } else {
      return <LoginButton/>;
    }
};
export default MenuLinks;
