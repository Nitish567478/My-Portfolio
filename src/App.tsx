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
`;

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

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
    return <Loader />;
  }

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contect />
      <Footer />
    </ThemeProvider>
  );
}

export default App;