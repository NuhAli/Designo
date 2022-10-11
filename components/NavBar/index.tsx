import React from "react";
import Link from "next/link";
import links from "./links";
import {
  Container,
  Logo,
  LogoIcon,
  NavLink,
  NavLinks,
  SidebarIcon,
  Wrapper,
} from "./styles";

export const NavBar = () => {
  const navLinks = links.map((link, index) => {
    return (
      <Link key={index} href={link.to} passHref>
        <NavLink>{link.name}</NavLink>
      </Link>
    );
  });
  return (
    <Container>
      <Wrapper>
        <Link href={"/"}>
          <Logo>
            <LogoIcon />
            <p>DESIGNO</p>
          </Logo>
        </Link>
        <SidebarIcon />
        <NavLinks>{navLinks}</NavLinks>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
