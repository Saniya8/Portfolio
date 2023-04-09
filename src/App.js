// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './static/Home';
import About from './static/About';
import Projects from './static/Projects';
import Contact from './static/Contact';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </>
  );
}

export default App;
