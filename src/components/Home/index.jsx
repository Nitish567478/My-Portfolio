import React, { useEffect, useState } from "react";
import myPhoto from "../../assets/myphoto.png";
import {
  Section, Hero, HeroLeft, HeroRight, HeroTitle, HeroName, HeroRole, StrongText,
  Cursor, HeroDescription, HeroButtons, Button, HeroSocial, SocialLink,
  ImageBox, ImageRing, HeroImage, HeroStats, StatItem, StatNumber, StatLabel,
  KeyboardBG, Key
} from "./StyleComponents";

const Home = () => {
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [delta, setDelta] = useState(120);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  // Array for background keys (approx 200 keys)
  const bgKeys = Array.from({ length: 200 });

  useEffect(() => {
    const handleMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];
    if (!isDeleting && charIndex <= currentRole.length) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex + 1 === currentRole.length) setTimeout(() => setIsDeleting(true), 1500);
      }, delta);
    } else if (isDeleting && charIndex > 0) {
      timer = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex - 1 === 0) {
          setDelta(50);
          setTimeout(() => {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            setDelta(120);
            setCharIndex(0);
          }, 500);
        }
      }, delta);
    }
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, delta, roles]);

  useEffect(() => { setIsVisible(true); }, []);

  return (
    <Section id="home">  
      <KeyboardBG>
        {bgKeys.map((_, i) => {
          const id = `key-${i}`;
          const el = document.getElementById(id);
          let isPressed = false;
          if (el) {
            const r = el.getBoundingClientRect();
            const dist = Math.sqrt(Math.pow(mousePos.x - (r.left + r.width/2), 2) + Math.pow(mousePos.y - (r.top + r.height/2), 2));
            isPressed = dist < 100; 
          }
          return <Key id={id} key={i} isPressed={isPressed} />;
        })}
      </KeyboardBG>

      <Hero>
        <HeroLeft isVisible={isVisible}>
          <HeroTitle>Hi, I'm <HeroName>Nitish Kumar Yadav</HeroName></HeroTitle>
          <HeroRole>I'm a <StrongText>{text}</StrongText><Cursor /></HeroRole>
          <HeroDescription>
            Building modern, interactive and user-friendly web applications 
            using React.js, Node.js and modern web technologies.
          </HeroDescription>
          <HeroButtons>
            <Button href="#projects" variant="primary">View My Work ↗</Button>
            <Button href="#contact" variant="secondary">Contact Me ↗</Button>
            <Button href="Nitish_Kumar_Yadav.pdf" variant="outline" download>Download Resume ↗</Button>
          </HeroButtons>
          <HeroSocial>
            <SocialLink href="https://github.com/Nitish567478" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </SocialLink>
            <SocialLink href="https://github.com/Nitish567478" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.236 1.91 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </SocialLink>
          </HeroSocial>
        </HeroLeft>

        <HeroRight isVisible={isVisible}>
          <ImageBox>
            <ImageRing /><HeroImage src={myPhoto} alt="Nitish Kumar Yadav" />
          </ImageBox>
          <HeroStats>
            <StatItem><StatNumber>20+</StatNumber><StatLabel>Projects</StatLabel></StatItem>
          </HeroStats>
        </HeroRight>
      </Hero>
    </Section>
  );
};

export default Home;