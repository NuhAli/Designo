import React from "react";
import { FormBackground, FormIntroduction, FormTitle, FormText, Form, FormInput, FormTextInput, FormButton } from "./styles";


export const ContactForm = () => {
  return (
    <FormBackground>
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
