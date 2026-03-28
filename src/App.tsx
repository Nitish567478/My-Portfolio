import React, { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contect from "./components/Contect";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Achievements from "./components/Achievements";
import AnimatedCursor from "./components/AnimatedCursor";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg: ${({ theme }) => theme.background};
    --text: ${({ theme }) => theme.text};
    --nav-bg: ${({ theme }) => theme.navBg};
    --accent: ${({ theme }) => theme.accent};
    --accent-soft: ${({ theme }) => theme.accentSoft};
    --gradient: ${({ theme }) => theme.gradient};
    --shadow: ${({ theme }) => theme.shadow};
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--bg);
    color: var(--text);
    transition: background 0.3s ease, color 0.3s ease;
    font-family: system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  @media (pointer: fine) {
    html,
    body,
    a,
    button,
    [role="button"],
    input[type="submit"],
    input[type="button"],
    label[for],
    select,
    summary {
      cursor: auto;
    }

    input,
    textarea {
      cursor: text;
    }
  }

  .animated-cursor {
    position: fixed;
    top: 0;
    left: 0;
    width: 42px;
    height: 42px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0;
    transform: translate3d(-100px, -100px, 0);
    transition: opacity 0.2s ease, width 0.22s ease, height 0.22s ease, filter 0.22s ease;
    filter: drop-shadow(0 0 12px rgba(255, 107, 53, 0.35));
  }

  .animated-cursor.is-visible {
    opacity: 0.98;
  }

  .animated-cursor.is-interactive {
    width: 56px;
    height: 56px;
  }

  .animated-cursor.is-pressed {
    width: 32px;
    height: 32px;
  }

  .cursor-core,
  .cursor-ring {
    position: absolute;
    inset: 50% auto auto 50%;
    border-radius: 999px;
    transform: translate(-50%, -50%);
  }

  .cursor-core {
    width: 8px;
    height: 8px;
    background: #ffffff;
    box-shadow: 0 0 16px rgba(255, 255, 255, 0.65);
  }

  .cursor-ring {
    width: 100%;
    height: 100%;
    border: 2px solid rgba(255, 255, 255, 0.96);
    background: rgba(255, 107, 53, 0.18);
    box-shadow: 0 0 0 6px rgba(255, 107, 53, 0.12);
    animation: cursorPulse 1.8s ease-in-out infinite;
    transition: transform 0.22s ease, background 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
  }

  .animated-cursor.is-interactive .cursor-ring {
    transform: translate(-50%, -50%) scale(1.06);
    background: rgba(255, 107, 53, 0.28);
    border-color: rgba(255, 255, 255, 1);
    box-shadow: 0 0 0 10px rgba(255, 107, 53, 0.16);
  }

  .animated-cursor.is-pressed .cursor-ring {
    transform: translate(-50%, -50%) scale(0.84);
    background: rgba(255, 107, 53, 0.35);
  }

  .animated-cursor.is-pressed .cursor-core {
    transform: translate(-50%, -50%) scale(0.9);
  }

  @keyframes cursorPulse {
    0%,
    100% {
      box-shadow: 0 0 0 6px rgba(255, 107, 53, 0.12);
    }

    50% {
      box-shadow: 0 0 0 11px rgba(255, 107, 53, 0.06);
    }
  }
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
 
  
  useEffect(() => {
    const preventDefault = (e) => e.preventDefault();

    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.shiftKey && e.key === "J") ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventDefault);
    document.addEventListener("copy", preventDefault);
    document.addEventListener("cut", preventDefault);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", preventDefault);
      document.removeEventListener("copy", preventDefault);
      document.removeEventListener("cut", preventDefault);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (loading) {
    return <Loader setLoading={setLoading} />;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AnimatedCursor />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Achievements />
      <Project />
      <Contect />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
