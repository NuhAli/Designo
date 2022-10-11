import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { ContactForm } from "../components/ContactForm";
import { LocationCard } from "../components/LocationCard";
import { locationData } from "../components/LocationCard/locations";
import styles from "../styles/Home.module.css";

const IllustrationSection = styled.div`
  margin: 5rem 0 15rem 0;
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
`;

const Contact: NextPage = () => {
  const locations = locationData.map((location, index) => {
    return (
      <LocationCard key={index} title={location.name} image={location.image} />
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>Designo | Contact Us</title>
        <meta name="description" content="Designo FrontendMentor Challenge" />
        <link rel="icon" href="/assets/favicon-32x32.png" />
      </Head>
      <ContactForm />
      <IllustrationSection>{locations}</IllustrationSection>
    </div>
  );
};

export default Contact;
