import React from "react";
import { FiArrowUp, FiHeart, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import {
  FooterSection,
  FooterContainer,
  FooterTopRow,
  FooterBrandCol,
  FooterLogo,
  FooterTagline,
  FooterLinksCol,
  FooterNavRow,
  FooterNavLink,
  FooterSocialRow,
  FooterSocialBtn,
  FooterDivider,
  FooterBottomRow,
  CopyrightText,
  BackToTopBtn
} from "./StyleComponents";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterSection>
      <FooterContainer>
        <FooterTopRow>
          <FooterBrandCol>
            <FooterLogo href="#home">
              NITISH<span>.DEV</span>
            </FooterLogo>
            <FooterTagline>
              Full Stack Engineer specializing in modern MERN stack architecture, real-time web applications, and intuitive UI/UX design.
            </FooterTagline>
          </FooterBrandCol>

          <FooterLinksCol>
            <FooterNavRow>
              <FooterNavLink href="#home">Home</FooterNavLink>
              <FooterNavLink href="#about">About</FooterNavLink>
              <FooterNavLink href="#skills">Skills</FooterNavLink>
              <FooterNavLink href="#achievements">Achievements</FooterNavLink>
              <FooterNavLink href="#projects">Projects</FooterNavLink>
              <FooterNavLink href="#contact">Contact</FooterNavLink>
            </FooterNavRow>

            <FooterSocialRow>
              <FooterSocialBtn
                href="https://www.linkedin.com/in/nitishkumaryadav111"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </FooterSocialBtn>

              <FooterSocialBtn
                href="https://github.com/Nitish567478"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </FooterSocialBtn>

              <FooterSocialBtn
                href="mailto:kumarnitishgrd147@gmail.com"
                aria-label="Email"
              >
                <FiMail />
              </FooterSocialBtn>
            </FooterSocialRow>
          </FooterLinksCol>
        </FooterTopRow>

        <FooterDivider />

        <FooterBottomRow>
          <CopyrightText>
            &copy; {currentYear} <strong>Nitish Kumar Yadav</strong>. Built with React.js & modern craftsmanship.
          </CopyrightText>

          <BackToTopBtn onClick={scrollToTop}>
            <span>Back to Top</span>
            <FiArrowUp />
          </BackToTopBtn>
        </FooterBottomRow>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;