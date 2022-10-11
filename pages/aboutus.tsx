import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import AboutCard from "../components/AboutCard";
import InformationCard from "../components/InformationCard";
import { data } from "../components/InformationCard/informationCardData";
import { LocationCard } from "../components/LocationCard";
import { locationData } from "../components/LocationCard/locations";
import styles from "../styles/Home.module.css";

const IllustrationSection = styled.div`
  margin: 5rem 0;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;

  @media screen and (min-width: 1024px) {
    justify-content: space-evenly;
    flex-direction: row;
  }
`


const Home: NextPage = () => {
  const locations = locationData.map((location, index) => {
    return (
      <LocationCard key={index} title={location.name} image={location.image} />
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | About Us</title>
        <meta name="description" content="Designo FrontendMentor Challenge" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <AboutCard />
      <InformationCard
        name={data[0].name}
        description={data[0].description}
        order={data[0].order}
        mobileImage={data[0].mobileImage}
        tabletImage={data[0].tabletImage}
        desktopImage={data[0].desktopImage}
      />
      <IllustrationSection>
      {locations}
      </IllustrationSection>
      <InformationCard
        name={data[1].name}
        description={data[1].description}
        order={data[1].order}
        mobileImage={data[1].mobileImage}
        tabletImage={data[1].tabletImage}
        desktopImage={data[1].desktopImage}
      />
    </div>
  );
};

export default Home;
