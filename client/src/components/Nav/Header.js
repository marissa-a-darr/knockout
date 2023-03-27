import React from "react";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { 
  AddTeam,
  Chat,
  EditProfile,
  EditTeam,
  Feed,
  LandingPage,
  Profile,
  Team,
  User 
  
}   from '../../pages';


const Header = () => {
  return (
     <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route path="/edit_team/:teamId" element={<EditTeam />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/team/:teamId" element={<Team />} />
        <Route path="/add_team" element={<AddTeam />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>  
    </Router>
  )
};

export default Header;
