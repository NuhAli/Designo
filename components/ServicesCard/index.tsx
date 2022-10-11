import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { Service } from "../../types/serviceCard";
import Image from "next/image";
import Link from "next/link";
import { CardBackground, CardText, CardTitle, CardLink, CardFlex, CardGrid } from "./styles";

const ServicesCard = ({
  name,
  desktopImage,
  mobileImage,
  tabletImage,
  src,
  type,
}: Service): JSX.Element | null => {
  const windowWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(windowWidth);
  const [image, setImage] = useState("");

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

  const innerContent = (
    <>
      <Image src={image as string} alt={name} layout={"fill"} />
      <CardBackground>
        <CardText>
          <CardTitle>{name}</CardTitle>
          <CardLink>
            View Project <span> {<IoIosArrowForward />} </span>
          </CardLink>
        </CardText>
      </CardBackground>
    </>
  );

  return image ? (
    <Link href={src}>
      {type === "Grid" ? (
        <CardGrid>{innerContent}</CardGrid>
      ) : (
        <CardFlex>{innerContent}</CardFlex>
      )}
    </Link>
  ) : null;
};

export default ServicesCard;
