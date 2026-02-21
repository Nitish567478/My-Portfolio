import React from "react";
import {
  AboutSection,
  AboutPart,
  AboutHeading,
  AboutParagraph,
  StrongAbout,
  EducationSection,
  EducationHeading,
  EducationList,
  EducationItem
} from "./StyleComponent";

const About = () => {
  return (
    <AboutSection id="about">
      <AboutPart>
        <AboutHeading>About Me</AboutHeading>

        <AboutParagraph>
          Hi, I’m <StrongAbout>Nitish Kumar Yadav</StrongAbout>, a passionate{" "}
          <StrongAbout>React Developer</StrongAbout> from Ranchi, Jharkhand.
          I build modern, interactive, and user-friendly web applications.
        </AboutParagraph>

        <AboutParagraph>
          I specialize in <StrongAbout>React.js</StrongAbout> and modern web technologies,
          and I enjoy creating clean UI/UX designs, web apps, and games with smooth performance.
        </AboutParagraph>
      </AboutPart>

      <EducationSection>
        <AboutPart>
          <EducationHeading>Education</EducationHeading>

          <EducationList>
            <EducationItem>
              <strong>B.Tech (Computer Science & Engineering)</strong><br />
              RKDF University, Ranchi<br />
              <span>Currently Studying</span>
            </EducationItem>

            <EducationItem>
              <strong>12th (ISc)</strong><br />
              Geeta Inter College, Hazaribag<br />
              <span>2020 - 2022</span>
            </EducationItem>

            <EducationItem>
              <strong>10th</strong><br />
              Lal Bihari Mahto Divine Public School, Giridih<br />
              <span>2018 - 2020</span>
            </EducationItem>
          </EducationList>
        </AboutPart>
      </EducationSection>
    </AboutSection>
  );
};

export default About;