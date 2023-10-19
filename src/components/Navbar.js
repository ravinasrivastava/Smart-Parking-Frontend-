import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  Logo,
} from "./Navbar.style";
import LogoImg from "../images/pic2.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <a>SMART PARKING SYSTEM</a>
        </LeftContainer>
        <RightContainer>
          <Logo src={LogoImg}></Logo>
        </RightContainer>
      </NavbarInnerContainer>
      
    </NavbarContainer>
  );
}

export default Navbar;
