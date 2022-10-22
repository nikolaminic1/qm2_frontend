import React, { FC, ReactElement } from "react";
import {
  ItemsDiv,
  LinksDiv,
  ListLinks,
  LogoDiv,
  MainNavbarDiv,
} from "./styleNavbar";
import logo from "../_assets/logo_svg.svg";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}): ReactElement => {
  return (
    <MainNavbarDiv>
      <ItemsDiv>
        <LogoDiv>
          <img src={logo} />
        </LogoDiv>
        <LinksDiv>
          <ListLinks>
            <li>link 1</li>
            <li>link 1</li>
            <li>link 1</li>
            <li>link 1</li>
          </ListLinks>
        </LinksDiv>
      </ItemsDiv>
    </MainNavbarDiv>
  );
};

export default Navbar;
