import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 100vw;
  height: 715px;
  max-width: 1111px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 100%;
    border-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    height: 480px;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 320px;
  position: relative;
  @media screen and (min-width: 1024px) {
    flex-direction: row-reverse;
    height: 480px;
    width: 476px;
  }
`;

const TextContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: auto;
  height: 395px;
  background-color: #e7816b;
  padding: 80px 24px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    height: 312px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media screen and (min-width: 1024px) {
    align-items: flex-start;
    padding-left: 95px;
    border-bottom-right-radius: 0;
    height: 480px;
    width: 640px;
  }
`;

const CardTitle = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 36px;
  text-align: center;
  color: #ffffff;
  z-index: 2;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const CardDescription = styled.p`
  max-width: 458px;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  color: #ffffff;
  z-index: 2;

  @media screen and (min-width: 1024px) {
    text-align: left;
  }
`;

const PatternContainer = styled.div`
  position: absolute;
  top: -25%;
  right: 0;
`;

const AboutCard = () => {
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
    renderPattern();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const renderBackground = () => {
    if (width >= 375) {
      setImage("/assets/about/mobile/image-about-hero.jpg");
    }
    if (width >= 768) {
      setImage("/assets/about/tablet/image-about-hero.jpg");
    }
    if (width >= 1024) {
      setImage("/assets/about/desktop/image-about-hero.jpg");
    }
  };

  const renderPattern = () => {
    if (width >= 375) {
      setPattern("/assets/about/mobile/bg-pattern-hero-about-mobile.svg");
    }
    if (width >= 1024) {
      setPattern("/assets/about/desktop/bg-pattern-hero-about-desktop.svg");
    }
  };
  return (
    <Card>
      <CardImage>
        <Image src={image} alt={"hero image"} layout={"fill"} />
      </CardImage>
      <TextContainer>
        <CardTitle>About Us</CardTitle>
        <CardDescription>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </CardDescription>
        <PatternContainer>
          <Image
            src={pattern}
            width={292}
            height={292}
            layout={"responsive"}
            alt={"Pattern"}
          />
        </PatternContainer>
      </TextContainer>
    </Card>
  );
};

export default AboutCard;
