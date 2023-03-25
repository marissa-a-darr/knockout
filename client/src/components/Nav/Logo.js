import React from "react";
import {Box, Image} from "@chakra-ui/react";
function Logo(props) {
  return (
    <Box{...props}>
    <Image className="headerLogo" src={require("../../images/knock (2).png")} alt="logo"/>
</Box>
)
}

export default Logo