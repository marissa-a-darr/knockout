import React from "react";
import {Image} from "@chakra-ui/react";

import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from '@apollo/client';
import { QUERY_MYTEAMS } from '../utils/queries';
const myStyle = {
  color: "#ffffff",
  backgroundColor: "#000000",
  padding: "20px",
  fontSize: "20px",
  fontFamily: "Lucida Console, Monaco, monospace",
  minHeight: "100vh"

}

const LandingPage = () => {
  const { user } = useAuth0();
  const { data } = useQuery(QUERY_MYTEAMS, {
    variables: {
      username: user?.email || user?.nickname || ''
    }
  });

  const me = data?.me || {};
  console.log(me);

  return (
    <div className="container" style={myStyle}>
      <h1>Welcome to Knockout! Time to get out and play!</h1>
    
      <Image width='300px' className="headerLogo" src={require("../images/knockout.gif")} alt="knockout home gif"/>
  
    </div>
  );
};

export default LandingPage;
