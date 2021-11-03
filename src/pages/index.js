import React from "react";
import Meta from "components/Meta";
import NavbarCustom from "components/NavbarCustom";
import HeroSection from "components/HeroSection";
import FeaturesSection from "components/FeaturesSection";
import UsersSection from "components/UsersSection";
import FaqSection from "components/FaqSection";
import ContactSection from "components/ContactSection";
import Footer from "components/Footer";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <NavbarCustom
        bg="white"
        variant="light"
        expand="md"
        logo="https://uploads.divjoy.com/logo.svg"
      />
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Your landing page title here"
        subtitle="This landing page is perfect for showing off your awesome product and driving people to sign up for a paid plan."
        buttonText="Get Started"
        buttonColor="primary"
        buttonPath="/pricing"
      />
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="All the features you need to move faster"
      />
      <UsersSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Users"
        subtitle=""
      />
      <FaqSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Frequently Asked Questions"
        subtitle="Here are some answers to the questions we hear from people the most."
      >
      
      </FaqSection>
      <ContactSection
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          title="Contact Us"
          subtitle=""
          buttonText="Send message"
          buttonColor="primary"
          showNameField={true}
        />
      <Footer
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        copyright={`© ${new Date().getFullYear()} Company`}
        logo="https://uploads.divjoy.com/logo.svg"
      />
    </>
  );
}

export default IndexPage;
