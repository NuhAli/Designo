import React, { useEffect, useState } from "react";
import { IServiceHeaderProps } from "../../types/serviceHeader";
import {
  TextContainer,
  HeaderTitle,
  HeaderDescription,
  HeaderContainer,
  BackgroundImage,
} from "./styles";

const ServiceHeader = ({ title, description }: IServiceHeaderProps) => {
  const windowWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(windowWidth);
  const [image, setImage] = useState("");

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <HeaderContainer>
      <BackgroundImage
        src={"/assets/web-design/desktop/bg-pattern-intro-web.svg"}
      />
      <TextContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderDescription>{description}</HeaderDescription>
      </TextContainer>
    </HeaderContainer>
  );
};

export default ServiceHeader;
