import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { IllustrationCardType } from "../../types/illustrationCard";
import { Card, ImageBackground, FadedCircle, TextContainer, CardTitle, CardDescription } from "./styles";



export const IllustrationCard = ({
  title,
  description,
  image,
}: IllustrationCardType) => {
  return (
    <Card>
      <ImageBackground>
        <FadedCircle />
        <Image src={image} width={202} height={202} alt={title} />
      </ImageBackground>
      <TextContainer>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextContainer>
    </Card>
  );
};
