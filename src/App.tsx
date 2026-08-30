import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./GlobalStyle";

import TechCanvas3D from "./components/TechCanvas3D";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import Achievements from "./components/Achievements";
import AnimatedCursor from "./components/AnimatedCursor";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio_theme");
    return savedTheme !== null ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    localStorage.setItem("portfolio_theme", darkMode ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // Disable Inspect Element & DevTools Shortcuts
  useEffect(() => {
    // 1. Disable Right-Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Disable Key Shortcuts (F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U, Ctrl+S)
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;

      // F12
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      // Ctrl + Shift + I (Inspect), Ctrl + Shift + J (Console), Ctrl + Shift + C (Element Picker)
      if (isCtrlOrCmd && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) {
        e.preventDefault();
        return false;
      }

      // Ctrl + U (View Page Source)
      if (isCtrlOrCmd && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        return false;
      }

      // Ctrl + S (Save Page)
      if (isCtrlOrCmd && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <AnimatedCursor />
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <div className="app-container" style={{ position: "relative", width: "100%", overflowX: "hidden" }}>
          <TechCanvas3D darkMode={darkMode} />
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
          <main style={{ position: "relative", zIndex: 1, width: "100%" }}>
            <Home />
            <About />
            <Skills />
            <Achievements />
            <Project />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
