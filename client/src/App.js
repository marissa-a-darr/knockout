import './App.css';
import React from 'react';
// import Nav from './components/Nav/Nav';
import Header from './components/Nav/Header';
import { 
  AddTeam,
  Chat,
  EditProfile,
  EditTeam,
  Feed,
  // Login,
  Profile,
  Team,
  User 
  
} 
  from './pages';
import AuthenticationButton from './components/Nav/testingAuth';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <> 
    <Header></Header>
    {/* <Nav /> */}
    <Router>

     <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/edit_profile" element={<EditProfile />} />
        <Route path="/edit_team/:teamId" element={<EditTeam />} />
         {/* <Route path="/login" element={<Login />} />  */}
         <Route path="/profile" element={<Profile />} />
        <Route path="/team/:teamId" element={<Team />} />
        <Route path="/add_team" element={<AddTeam />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes> 
    </Router>
  </>
    
  
  );
}



export default App;
