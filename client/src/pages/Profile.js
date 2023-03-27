import React from "react";
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from '@apollo/client';
import MyTeamList from "./MyTeamList";
import {
  Table,
  Thead,
  Tbody,
Text,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Image,
  Textarea,
} from '@chakra-ui/react';

import { color } from "framer-motion";

//style for profile page
  const myStyle = {
    backgroundColor: "#000000",
    padding: "20px",
    fontFamily: "Lucida Console, Monaco, monospace",
    minHeight: "100vh"
  }
  
const Profile = () => {
  const {user, isAuthenticated} = useAuth0();

  return (
    <div className="container" style={myStyle}>
        <Text fontSize={"50px"} color={"gold"}>Welcome Back, {user?.name} !</Text>

{user&&(  <Image src={user.picture} referrerpolicy="no-referrer"  alt="Profile Picture" height={"auto"} width={"auto"} border={"2px solid gold"}/>
)}

<Text color={"White"} fontSize={"20px"} border={"2px solid white"}>This is my bio example.

</Text>
<br />

        <Text fontSize={"30px"} color={"white"}> My Teams: </Text>
       <MyTeamList></MyTeamList>
       <Link to="/edit_profile" style={{ color: "#000000" }}>
              <Button>Edit Profile</Button>
            </Link>
            <br />
            <br />
        </div>
  );
};

export default Profile;