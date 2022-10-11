import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import { HeroCard } from "../components/HeroCard";
import ProjectCard from "../components/ProjectCard";
import { graphicDesignData, webDesignProjects } from "../components/ProjectCard/projects";
import ServicesCard from "../components/ServicesCard";
import ServiceHeader from "../components/ServicesHeader";
import data from "../components/ServicesCard/data"
import styles from "../styles/Home.module.css";
import { serviceHeadersData } from "../components/ServicesHeader/data";

const Projects = styled.section`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;

  @media screen and (min-width: 1110px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
`;

const ServicesBox = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  max-width: 1111px;
  margin-bottom: 286px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1110px) {
    padding: 0;
    height: auto;
    width: 1110px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const GrapghicDesign: NextPage = () => {
  const renderProjects = graphicDesignData.map((project, index) => {
    return (
      <ProjectCard
        key={index}
        name={project.name}
        description={project.description}
        image={project.image}
      />
    );
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Graphic Design Projects</title>
        <meta name="description" content="Designo FrontendMentor Challenge" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <ServiceHeader title={serviceHeadersData[2].title} description={serviceHeadersData[2].description} />
      <Projects>{renderProjects}</Projects>
      <ServicesBox>
        <ServicesCard
          name={data[0].name}
          desktopImage={data[0].desktopImage}
          tabletImage={data[0].tabletImage}
          mobileImage={data[0].mobileImage}
          src={data[0].src}
          type={"Flex"}
        />
        <ServicesCard
          name={data[1].name}
          desktopImage={data[1].desktopImage}
          tabletImage={data[1].tabletImage}
          mobileImage={data[1].mobileImage}
          src={data[1].src}
          type={"Flex"}
        />
      </ServicesBox>
    </div>
  );
};

export default GrapghicDesign;
