import React from "react";
import {
  FooterSection,
  FooterContainer,
  FooterName,
  FooterText,
  FooterLinks,
  FooterLink
} from "./StyleComponents";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterSection>
      <FooterContainer>
        <FooterName>Nitish Kumar Yadav</FooterName>

        <FooterText>
          &copy; {year} Nitish Kumar Yadav. Made with ❤️.
        </FooterText>

        <FooterLinks>
          <FooterLink
            href="https://www.linkedin.com/in/nitishkumaryadav111"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn <span>↗</span>
          </FooterLink>

          <FooterLink
            href="https://github.com/Nitish567478"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span>↗</span>
          </FooterLink>

          <FooterLink href="#home">
            Back to Top <span>↑</span>
          </FooterLink>
        </FooterLinks>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;