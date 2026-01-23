import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contect from './components/Contect';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Footer from './components/Footer';

import './App.css';
function App() {
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
