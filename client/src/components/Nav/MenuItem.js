// import { Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation} from "react-router-dom";

const MenuItem = (props) => {
  const to = props.to
  const location = useLocation()
  
  return (
    <Link to={to}>
    
     {props.linkName}
      
    </Link>
  )
}


export default MenuItem;
