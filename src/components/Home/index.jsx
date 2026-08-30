import React, { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiCode, FiAward, FiCheckCircle } from "react-icons/fi";
import myPhoto from "../../assets/myphoto.png";
import me1 from "../../assets/me1.png";
import me from "../../assets/me.png";

import {
  Section,
  BackgroundGlow,
  HeroContainer,
  HeroLeft,
  HeroRight,
  AvailabilityBadge,
  HeroTitle,
  HeroName,
  HeroRoleWrapper,
  RolePrefix,
  TypewriterText,
  CursorBlink,
  HeroDescription,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  SocialRow,
  SocialIconButton,
  ImageWrapper,
  ImageGlowRing,
  FloatingBadge,
  HeroStatsRow,
  StatBox,
  StatNumber,
  StatLabel
} from "./StyleComponents";

import { FcGoogle } from "react-icons/fc";

const roles = [
  "Full Stack Engineer",
  "Hackathon Lead Organizer '25",
  "MERN Stack Developer",
  "Google Student Ambassador '25",
  "Backend & API Engineer",
];

const heroImages = [myPhoto, me1, me];

const Home = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && charIndex <= currentRole.length) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      }, delta);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setDelta(90);
          setCharIndex(0);
        }
      }, delta / 2);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, delta]);

  // Subtle image cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Section id="home">
      {/* Background ambient lighting */}
      <BackgroundGlow />

      <HeroContainer>
        {/* Left Column: Bio & CTAs */}
        <HeroLeft>
          <AvailabilityBadge>
            <span className="pulse-dot"></span>
            Available for Freelance & Full-Time Roles
          </AvailabilityBadge>

          <HeroTitle>
            Hi, I'm <HeroName>Nitish Kumar Yadav</HeroName>
          </HeroTitle>

          <HeroRoleWrapper>
            <RolePrefix>I am a </RolePrefix>
            <TypewriterText>{text}</TypewriterText>
            <CursorBlink />
          </HeroRoleWrapper>

          <HeroDescription>
            I build scalable, high-performance web applications with pixel-perfect user interfaces and robust backend architectures. Focused on delivering real-world impact through clean code, modern UX, and scalable systems.
          </HeroDescription>

          <HeroButtons>
            <PrimaryButton href="#projects">
              <span>View Projects</span>
              <FiArrowUpRight size={18} />
            </PrimaryButton>

            <SecondaryButton href="#contact">
              <span>Get In Touch</span>
              <FiMail size={18} />
            </SecondaryButton>

            <OutlineButton href="/Nitish_Kumar_Yadav.pdf" download>
              <span>Resume</span>
              <FiDownload size={18} />
            </OutlineButton>
          </HeroButtons>

          <SocialRow>
            <SocialIconButton
              href="https://www.linkedin.com/in/nitishkumaryadav111"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin />
            </SocialIconButton>

            <SocialIconButton
              href="https://github.com/Nitish567478"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FiGithub />
            </SocialIconButton>

            <SocialIconButton
              href="mailto:kumarnitishgrd147@gmail.com"
              aria-label="Send Email"
            >
              <FiMail />
            </SocialIconButton>
          </SocialRow>

          <HeroStatsRow>
            <StatBox>
              <StatNumber>20+</StatNumber>
              <StatLabel>Projects Delivered</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>12+</StatNumber>
              <StatLabel>Certifications</StatLabel>
            </StatBox>
            <StatBox>
              <StatNumber>300+</StatNumber>
              <StatLabel>DSA Problems</StatLabel>
            </StatBox>
          </HeroStatsRow>
        </HeroLeft>

        {/* Right Column: 3D Interactive Portrait */}
        <HeroRight>
          <Tilt
            tiltMaxAngleX={12}
            tiltMaxAngleY={12}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
          >
            <ImageWrapper>
              <ImageGlowRing />
              <img
                src={heroImages[activeImageIndex]}
                alt="Nitish Kumar Yadav - Full Stack Developer"
                className="hero-avatar"
              />

              {/* Floating tech badge 1 */}
              <FloatingBadge className="badge-top-left">
                <FiCode className="badge-icon" />
                <div>
                  <h4>MERN Stack</h4>
                  <p>React • Node • MongoDB</p>
                </div>
              </FloatingBadge>

              {/* Floating tech badge 2 - Google Ambassador */}
              <FloatingBadge className="badge-bottom-right">
                <FcGoogle className="badge-icon" />
                <div>
                  <h4>Google Ambassador</h4>
                  <p>2025 • Official Swag Winner</p>
                </div>
              </FloatingBadge>
            </ImageWrapper>
          </Tilt>
        </HeroRight>
      </HeroContainer>
    </Section>
  );
};

export default Home;
