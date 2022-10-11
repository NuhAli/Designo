/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React from "react";
import FooterCard from "../FooterCard";
import { footerCardData } from "../FooterCard/data";
import links from "../NavBar/links";
import {
  FooterListLink,
  Container,
  Content,
  RowTop,
  Logo,
  LogoIcon,
  FooterList,
  LogoBorder,
  RowBottom,
  AdressArea,
  InfoText,
  ContactArea,
  SocialsArea,
} from "./styles";

const Footer = () => {
  const router = useRouter();
  const footerLinks = links.map((link, index) => {
    return (
      <Link key={index} href={link.to} passHref>
        <FooterListLink>{link.name}</FooterListLink>
      </Link>
    );
  });
  return (
    <Container style={router.pathname === "/contact" ? {paddingTop: 72 }: {paddingTop: 253}}>
      <Content>
        {router.pathname !== "/contact" ? (
          <FooterCard
            title={footerCardData.title}
            description={footerCardData.descriptiom}
          />
        ) : null}
        <RowTop>
          <Logo>
            <LogoIcon />
            <p>Designo</p>
          </Logo>
          <FooterList>{footerLinks}</FooterList>
        </RowTop>
        <LogoBorder />
        <RowBottom>
          <AdressArea>
            <InfoText>Designo Central Office</InfoText>
            <InfoText>3886 Wellington Street</InfoText>
            <InfoText>Toronto, Ontario M9C 3J5</InfoText>
          </AdressArea>
          <ContactArea>
            <InfoText>Contact Us (Central Office)</InfoText>
            <InfoText>P : +1 253-863-8967</InfoText>
            <InfoText>M : contact@designo.co</InfoText>
          </ContactArea>
          <SocialsArea>
            <img
              alt="facebook"
              src={"/assets/shared/desktop/icon-facebook.svg"}
              height={24}
              width={24}
            />
            <img
              alt="youtube"
              src={"/assets/shared/desktop/icon-youtube.svg"}
              height={24}
              width={24}
            />
            <img
              alt="twitter"
              src={"/assets/shared/desktop/icon-twitter.svg"}
              height={24}
              width={24}
            />
            <img
              alt="pintrest"
              src={"/assets/shared/desktop/icon-pinterest.svg"}
              height={24}
              width={24}
            />
            <img
              alt="instagram"
              src={"/assets/shared/desktop/icon-instagram.svg"}
              height={24}
              width={24}
            />
          </SocialsArea>
        </RowBottom>
      </Content>
    </Container>
  );
};

export default Footer;
