import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { IllustrationCardType } from "../../types/illustrationCard";
import { BackgroundImage } from "../InformationCard/styles";
import {
  Card,
  ImageBackground,
  FadedCircle,
  CardText,
  CardTitle,
  CardButton,
} from "./styles";

export const LocationCard = ({ title, image }: IllustrationCardType) => {
  return (
    <Link href={`/locations/#${title.toLowerCase()}`}>
      <Card>
        <ImageBackground>
          <FadedCircle />
          <Image src={image} alt={title} height={202} width={202} />
        </ImageBackground>
        <CardText>
          <CardTitle>{title}</CardTitle>
          <CardButton>See Location</CardButton>
        </CardText>
      </Card>
    </Link>
  );
};
