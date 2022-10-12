import React, { useState } from "react";
import Link from "next/link";
import links from "./links";
import {
  Container,
  Logo,
  LogoIcon,
  NavLink,
  NavLinks,
  SidebarIconBars,
  SidebarIconTimes,
  Wrapper,
} from "./styles";
import { INavProps } from "../../types/navBar";

export const NavBar = ({ click, handleClick, closeMenu }: INavProps) => {
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
          <Logo onClick={closeMenu}>
            <LogoIcon />
            <p>DESIGNO</p>
          </Logo>
        </Link>
        {click ? (
          <SidebarIconTimes onClick={handleClick} />
        ) : (
          <SidebarIconBars onClick={handleClick} />
        )}
        <NavLinks>{navLinks}</NavLinks>
      </Wrapper>
    </Container>
  );
};

export default NavBar;
