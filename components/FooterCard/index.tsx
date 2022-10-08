/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { IFooterProps } from "../../types/footerCard";
import Link from "next/link";
import { Card, TextContainer, CardTitle, CardDescription, CardButton } from "./styles";



const FooterCard = ({ title, description }: IFooterProps) => {
  return (
    <Card>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextContainer>
      <Link href={"/contact"}>
        <CardButton>GET IN TOUCH</CardButton>
      </Link>
    </Card>
  );
};

export default FooterCard;
