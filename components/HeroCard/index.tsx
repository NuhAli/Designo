import React from "react";
import hero from "./hero";
import Link from "next/link";
import { Card, CardInformation, CardTitle, CardBody, CardButton, CardPattern, CardPhone } from "./styles";

export const HeroCard = () => {
  return (
    <Card>
      <CardInformation>
        <CardTitle>{hero.title}</CardTitle>
        <CardBody>{hero.description}</CardBody>
        <Link href={"/about"}>
        <CardButton>Learn More</CardButton>
        </Link>
      </CardInformation>
      <CardPattern src={"/assets/home/desktop/bg-pattern-hero-home.svg"} />
      <CardPhone src={"/assets/home/desktop/image-hero-phone.png"} />
    </Card>
  );
};
