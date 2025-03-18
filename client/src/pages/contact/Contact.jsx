import React from "react";
import Page from "../../containers/page/Page";
import HeroSection from "../../containers/section/HeroSection";
import ContactForm from "./../../components/contact/ContactForm";

const Contact = () => {
  return (
    <Page>
      <HeroSection
        heading="Let's Connect"
        subTitle="Have a question, recipe suggestion, or just want to say hi? I'd love to hear from you. Drop me a message and I’ll get back to you as soon as I finish stirring the soup!"
        btn={{
          txt: "Send a Message",
          to: "#contact-form", // or scroll to your form section
        }}
      />
      <ContactForm />
    </Page>
  );
};

export default Contact;
