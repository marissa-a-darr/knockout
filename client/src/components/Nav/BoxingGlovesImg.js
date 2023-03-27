import React from "react";
import {Box, Image} from "@chakra-ui/react";
function BoxingGloves(props) {
  return (
    <Box{...props}>
    <Image width="200px" className="boxingGloves" src={require("../../images/gloves.png")} alt="boxinggloves"/>
</Box>
)
}

export default BoxingGloves