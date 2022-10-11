import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IServiceHeaderProps } from "../../types/serviceHeader";
import {
  TextContainer,
  HeaderTitle,
  HeaderDescription,
  HeaderContainer,
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
      <TextContainer>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderDescription>{description}</HeaderDescription>
      </TextContainer>
    </HeaderContainer>
  );
};

export default ServiceHeader;
