import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { Service } from "../../types/serviceCard";
import Image from "next/image";
import { Card, CardBackground, CardText, CardTitle, CardLink } from "./styles";

const ServicesCard = ({
  name,
  desktopImage,
  mobileImage,
  tabletImage,
  src,
}: Service) => {
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
    if (width >= 1440) {
      setImage(desktopImage);
    }
  };

  return (
    image && (
      <Card>
        <Image src={image as string} alt={name} layout={"fill"} />
        <CardBackground>
          <CardText>
            <CardTitle>{name}</CardTitle>
            <CardLink>
              View Project <span> {<IoIosArrowForward />} </span>
            </CardLink>
          </CardText>
        </CardBackground>
      </Card>
    )
  );
};

export default ServicesCard;
