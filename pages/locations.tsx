import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { HeroCard } from "../components/HeroCard";
import { IllustrationCard } from "../components/IllustrationCard";
import illustrationData from "../components/IllustrationCard/data";
import { OfficeCard } from "../components/OfficeCard";
import { location } from "../components/OfficeCard/data";
import ServicesCard from "../components/ServicesCard";
import data from "../components/ServicesCard/data";
import styles from "../styles/Home.module.css";

const LocationsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1111px;
  height: auto;
  margin-bottom: 310px;
`;

const Locations: NextPage = () => {
  const renderLocationCards = location.map((item, index) => {
    return (
      <OfficeCard
        key={index}
        imageTablet={item.imageTablet}
        imageDesktop={item.imageDesktop}
        name={item.name}
        address={item.address}
        contact={item.contact}
        id={item.id}
      />
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Locations</title>
        <meta name="description" content="Designo FrontendMentor Challenge" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <LocationsSection>{renderLocationCards}</LocationsSection>
    </div>
  );
};

export default Locations;
