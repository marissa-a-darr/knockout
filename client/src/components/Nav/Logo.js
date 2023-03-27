import React from "react";
import {Box, Image} from "@chakra-ui/react";
function Logo(props) {
  return (
    <Box{...props}>
    <Image width="800px" className="headerLogo" src={require("../../images/logo.jpg")} alt="logo"/>
</Box>
)
}

export default Logo