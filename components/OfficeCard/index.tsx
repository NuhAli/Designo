import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IOfficeProps } from "../../types/officeCard";
import { Card, CardImage, CardSubTitle, CardText, CardTextContainer, CardTitle, DetailRow, Row } from "./styles";

export const OfficeCard = ({
  imageTablet,
  imageDesktop,
  name,
  address,
  contact,
  id
}: IOfficeProps) => {
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
    if (width <= 768) {
      setImage(imageTablet);
    }
    if (width >= 1024) {
      setImage(imageDesktop);
    }
  };
  return (
    <Card id={id}>
      <CardImage>
        <Image
          alt="Office location Canada"
          src={image as string}
          layout={"fill"}
        />
      </CardImage>
      <CardTextContainer>
        <CardTitle>{name}</CardTitle>
        <DetailRow>
          <Row>
            <CardSubTitle>{address.office}</CardSubTitle>
            <CardText>{address.street}</CardText>
            <CardText>{address.city}</CardText>
          </Row>
          <Row>
            <CardSubTitle>Contact</CardSubTitle>
            <CardText>{contact.phoneNumber}</CardText>
            <CardText>{contact.mobileNumber}</CardText>
          </Row>
        </DetailRow>
      </CardTextContainer>
    </Card>
  );
};
