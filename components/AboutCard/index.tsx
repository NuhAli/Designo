import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBackground,
  CardDescription,
  CardImage,
  CardTitle,
  PatternContainer,
  TextContainer,
} from "./styles";

const AboutCard = () => {
  const windowWidth = typeof window !== "undefined" && window.innerWidth;
  const [width, setWidth] = useState(windowWidth);
  const [image, setImage] = useState("");
  const [pattern, setPattern] = useState("");

  useEffect(() => {
    renderBackground();
    renderPattern();
  }, []);

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
    if (width >= 728) {
      setPattern("/assets/about/desktop/bg-pattern-hero-about-desktop.svg");
    }
  };
  return (
    image && (
      <Card>
        <CardImage>
          <Image src={image} alt={"hero image"} layout={"fill"} />
        </CardImage>
        <TextContainer>
          <CardBackground src={pattern} />
          <CardTitle>About Us</CardTitle>
          <CardDescription>
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We’ve partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We’re always looking forward to creating brands, products,
            and digital experiences that connect with our clients’ audiences.
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
    )
  );
};

export default AboutCard;
