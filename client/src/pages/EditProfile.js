import React from "react";
import {  Link } from "react-router-dom";
import { Button,  FormControl,  Input, Text } from "@chakra-ui/react";
const myStyle = {
color: "white", 
  backgroundColor: "#000000",
  padding: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
height: "100vh",

}

const EditProfile = () => {
  return (
    <div className="container" style={myStyle}>
         
          <FormControl>
         
         <Input type={"text"}  placeholder="Edit Your Name" height={"100px"} width={"550px"}/>
         <br />
            <Input type="text" maxlength="5" placeholder='Enter Your Zipcode' height={"100px"} width={"550px"} color="white"/>
            <br />
          
            <Input type="text" placeholder="Enter something about yourself for your bio!" height={"250px"} color="white" width={"1000px"}/>
            <br />
 
            <Text fontSize={"30px"}>Upload a Photo for your Profile!</Text> <input type="file" accept="image/*"  fontSize="25px" />
            <br />
          </FormControl>
       <br />

        <Link to="/profile"><Button color={"black"}>Save Profile</Button></Link><br /><br />
    </div>
  );
};

export default EditProfile;
