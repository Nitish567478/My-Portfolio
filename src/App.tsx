import React, { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contect from './components/Contect';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {

  // useEffect(() => {

  //   const preventDefault = (e) => e.preventDefault();

  //   const handleKeyDown = (e) => {
  //     if (
  //       e.key === "F12" ||
  //       (e.ctrlKey && e.shiftKey && e.key === "I") ||
  //       (e.ctrlKey && e.shiftKey && e.key === "J") ||
  //       (e.ctrlKey && e.key === "U") ||
  //       (e.ctrlKey && e.key === "c") ||
  //       (e.ctrlKey && e.key === "a") ||
  //       (e.ctrlKey && e.key === "x")
  //     ) {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("contextmenu", preventDefault);
  //   document.addEventListener("copy", preventDefault);
  //   document.addEventListener("cut", preventDefault);
  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("contextmenu", preventDefault);
  //     document.removeEventListener("copy", preventDefault);
  //     document.removeEventListener("cut", preventDefault);
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };

  // }, []);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contect />
      <Footer />
    </div>
  );
}

export default App;