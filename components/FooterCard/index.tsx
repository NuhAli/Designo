/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { IFooterProps } from "../../types/footerCard";
import Link from "next/link";
import {
  Card,
  TextContainer,
  CardTitle,
  CardDescription,
  CardButton,
  CardImage,
  ButtonContainer,
} from "./styles";

const FooterCard = ({ title, description }: IFooterProps) => {
  return (
    <Card>
      <CardImage
        src={"/assets/shared/desktop/bg-pattern-call-to-action.svg"}
        alt={"background"}
      />
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextContainer>
      <ButtonContainer>
        <Link href={"/contact"}>
          <CardButton>GET IN TOUCH</CardButton>
        </Link>
      </ButtonContainer>
    </Card>
  );
};

export default FooterCard;
