import React from "react";
import {  Link } from "react-router-dom";
import { Button, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
const myStyle = {

  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "50px",
  fontFamily: "Lucida Console, Monaco, monospace",
height: "100%",

}

const EditProfile = () => {
  return (
    <div className="container" style={myStyle}>
         <Flex gap={"20px"}>
          <FormControl>
         
      
            <Input type="text" maxlength="5" placeholder='Enter Your Zipcode' height={"70px"} width={"250px"} color="white"/>
            <Input type="text" placeholder="Enter something about yourself!" height={"250px"} color="white" />
          </FormControl>
         </Flex>

        <Link to="/profile"><Button color={"gold"}>Save Profile</Button></Link><br /><br />
    </div>
  );
};

export default EditProfile;
