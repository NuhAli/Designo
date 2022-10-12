import Link from "next/link";
import React from "react";
import { ISidebar } from "../../types/sidebar";
import links from "../NavBar/links";
import { Container, Menu, MenuLink } from "./styles";

export const Sidebar = ({ closeMenu }: ISidebar) => {
  const renderLinks = links.map((item, index) => {
    return (
      <Link key={index} href={item.to}>
        <MenuLink onClick={closeMenu}>{item.name}</MenuLink>
      </Link>
    );
  });
  return (
    <Container>
      <Menu>{renderLinks}</Menu>
    </Container>
  );
};
