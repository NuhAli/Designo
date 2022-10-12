import React, { useEffect, useState } from "react";
import {
  FormBackground,
  FormIntroduction,
  FormTitle,
  FormText,
  Form,
  FormInput,
  FormTextInput,
  FormButton,
  Image
} from "./styles";

export const ContactForm = () => {
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
    if (width < 768) {
      setImage("/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg");
    }
    if (width >= 768) {
      setImage("/assets/contact/desktop/bg-pattern-hero-desktop.svg");
    }
  };
  return (
    <FormBackground>
      <Image src={image} alt={"background"}/>
      <FormIntroduction>
        <FormTitle>Contact Us</FormTitle>
        <FormText>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </FormText>
      </FormIntroduction>
      <Form>
        <FormInput type={"text"} placeholder={"Name"} />
        <FormInput type={"text"} placeholder={"Email Address"} />
        <FormInput type={"text"} placeholder={"Phone"} />
        <FormTextInput placeholder="Your Message" />
        <FormButton>Submit</FormButton>
      </Form>
    </FormBackground>
  );
};
