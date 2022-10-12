import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IInformationCard } from "../../types/informationCard";
import {
  ImageContainer,
  TextContainer,
  Card,
  CardReverse,
  CardTitle,
  CardDescription,
  BackgroundImage,
} from "./styles";

const InformationCard = ({
  name,
  description,
  mobileImage,
  desktopImage,
  tabletImage,
  order,
}: IInformationCard) => {
  const windowWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(windowWidth);
  const [image, setImage] = useState("");
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    renderBackground();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const renderBackground = () => {
    if (width >= 375) {
      setImage(mobileImage);
    }
    if (width >= 768) {
      setImage(tabletImage);
    }
    if (width >= 1024) {
      setImage(desktopImage);
    }
  };

  const content = (
    <>
      <BackgroundImage
        src={"/assets/shared/desktop/bg-pattern-three-circles.svg"}
      />
      <ImageContainer>
       {image &&  <Image src={image} layout={"fill"} alt={name} />}
      </ImageContainer>
      <TextContainer>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </TextContainer>
    </>
  );

  return order === "normal" && image !== "" ? (
    <Card>{content}</Card>
  ) : (
    <CardReverse>{content}</CardReverse>
  );
};

export default InformationCard;
