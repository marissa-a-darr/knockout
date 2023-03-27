import { Stack } from "@chakra-ui/react";
import React from "react";
import MenuLinks from "./MenuLinks";
import Logo from "./Logo";
import NavBarContainer from "./NavBarContainer";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NavBarContainer {...props}>
      <Logo w="10px" color={["white", "white", "primary.500", "primary.500"]} />
     
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
       <MenuLinks />
      </Stack>
    </NavBarContainer>
  );
};

export default NavBar;