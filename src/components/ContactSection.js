import React from "react";
import Container from "react-bootstrap/Container";
import Section from "components/Section";
import SectionHeader from "components/SectionHeader";
import Contact from "components/Contact";

function ContactSection(props) {
  return (
    <Section 
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
      id = "contact"
    >
      <Container
        style={{
          maxWidth: "850px",
        }}
        controlId="form"
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        />
        <Contact
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
        />
      </Container>
    </Section>
  );
}

export default ContactSection;
