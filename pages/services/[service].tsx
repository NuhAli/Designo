import { GetStaticPaths, NextPage, NextPageContext } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ProjectCard from "../../components/ProjectCard";
import ServicesCard from "../../components/ServicesCard";
import ServiceHeader from "../../components/ServicesHeader";
import styles from "../../styles/Home.module.css";
import { serviceHeadersData } from "../../components/ServicesHeader/data";
import { GetStaticProps } from "next";
import { Service } from "../../types/serviceCard";
import { IProject } from "../../types/project";
import { ParsedUrlQuery } from "querystring";
import { projectPageData } from "../../components/ProjectCard/projects";
import { IServices } from "../../types/services";

const Projects = styled.section`
  width: 100%;
  max-width: 1110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 96px;

  @media screen and (min-width: 1024px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  @media screen and (min-width: 1440px) {
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

  @media screen and (min-width: 1024px) {
    padding: 0;
    height: auto;
    width: 100%;
    max-width: 1110px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

interface IParams extends ParsedUrlQuery {
  service: string;
}

interface ServicePageProps {
  currentService: IServices;
}

const ServicePage: NextPage<ServicePageProps> = ({ currentService }) => {
  const renderProjects = () => {
    return currentService.projects.map((project: IProject, index: number) => {
      return (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          image={project.image}
        />
      );
    });
  };

  const renderServices = () => {
    return currentService.services.map((service: Service, index: number) => {
      return (
        <ServicesCard
          key={index * 2}
          name={service.name}
          desktopImage={service.desktopImage}
          tabletImage={service.tabletImage}
          mobileImage={service.mobileImage}
          src={service.src}
          type={"Flex"}
        />
      );
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Web Design Projects</title>
        <meta name="description" content="Designo FrontendMentor Challenge" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>

      {currentService && (
        <>
          <ServiceHeader title={currentService.title} description={currentService.description} />
          <Projects>{renderProjects()}</Projects>
          <ServicesBox>{renderServices()}</ServicesBox>
        </>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projectPageData.map((project) => {
    return { params: { service: project.slug } };
  });
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { service } = context.params as IParams;
  const item = projectPageData.filter((item) => item.slug === service);
  const currentService = item[0];
  return {
    props: { currentService },
  };
};

export default ServicePage;
