import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { HeroCard } from "../components/HeroCard";
import { IllustrationCard } from "../components/IllustrationCard";
import illustrationData from "../components/IllustrationCard/data";
import ServicesCard from "../components/ServicesCard";
import data from "../components/ServicesCard/data";
import styles from "../styles/Home.module.css";

const ServicesBox = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 1111px;
  padding: 0 24px;
  margin-bottom: 160px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1440px) {
    height: 640px;
    display: grid;
    justify-content: start;
    padding: 0;
    grid-template-columns: auto auto;
    grid-column-gap: 30px;
    grid-template-areas: "a b";
  }
`;

const IllustrationSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1111px;
  height: auto;
  color: "black";
  margin-bottom: 380px;

  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  }
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo</title>
        <meta name="description" content="Designo FrontendMentor Challenge" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <HeroCard />
      <ServicesBox>
        {data.map((item, index) => {
          return (
            <ServicesCard
              key={index}
              name={item.name}
              desktopImage={item.desktopImage}
              tabletImage={item.tabletImage}
              mobileImage={item.mobileImage}
              src={item.src}
            />
          );
        })}
      </ServicesBox>
      <IllustrationSection>
        {
          illustrationData.map((item,index) => {
            return <IllustrationCard key={index} title={item.title} description={item.description} image={item.image} />
          })
        }
      </IllustrationSection>
    </div>
  );
};

export default Home;
