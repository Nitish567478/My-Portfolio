import React, { useEffect, useState } from "react";
import "./index.css";
import myPhoto from "../../assets/myphoto.png";

const Home = () => {
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 120;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="home">
      <div className="hero">
        <div className={`hero-left ${isVisible ? 'animate' : ''}`}>
          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Nitish Kumar Yadav</span>
          </h1>

          <h2 className="hero-role">
            I'm a <strong className="strong-text"> {text}</strong>
            <span className="cursor"></span>
          </h2>

          <p className="hero-description">
            Building modern, interactive and user-friendly web applications using
            React.js, Node.js and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="cta-button primary">
              View My Work <span className="arrow">↗</span>
            </a>
            <a href="#contact" className="cta-button secondary">
              Contact Me <span className="arrow">↗</span>
            </a>
            <a href="#resume" className="cta-button outline" download>
              Download Resume <span className="arrow">↗</span>
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/Nitish567478" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.058-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.176 2.873.171 3.176.768.84 1.236 1.91 1.236 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nitishkumaryadav111/" className="social-link" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={`hero-right ${isVisible ? 'animate' : ''}`}>
          <div className="hero-image-box">
            <div className="image-ring"></div>
            <img src={myPhoto} alt="Nitish Kumar Yadav" className="hero-image" />
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects</span>
            </div>
            {/* <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Exp</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Sat</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
