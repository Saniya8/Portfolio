import "./Projectsstyles.css";
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import projects from "../images/projects.jpg";
import detection from "../images/detection.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <Navbar />
      <div className="cover">
        <img className="projects-img" src={projects} alt="projects" />
      </div>
      <div className="content">
        <h1>PROJECTS</h1>
        <p>Some of my most recent works...</p>
      </div>
      <div className="cards">
        <h1 align="center" style={{fontSize : 40}}>Projects</h1>
        <div className="cards-many">
          <div className="card-container1">

            <img src={detection} alt="detection" />
            <h1 className="card-title">Flower Detection</h1>
            <p className="card-info">This is a text...</p>
            <Link to="/projects" className="btn">VIEW</Link>

          </div>
          <div className="card-container2">

            <img src={detection} alt="detection" />
            <h1 className="card-title">Flower Detection</h1>
            <p className="card-info">This is a text...</p>
            <Link to="/projects" className="btn">VIEW</Link>

          </div>
          <div className="card-container3">

            <img src={detection} alt="detection" />
            <h1 className="card-title">Flower Detection</h1>
            <p className="card-info">This is a text...</p>
            <Link to="/projects" className="btn">VIEW</Link>

          </div>
          <div className="card-container4">

            <img src={detection} alt="detection" />
            <h1 className="card-title">Flower Detection</h1>
            <p className="card-info">This is a text...</p>
            <Link to="/projects" className="btn">VIEW</Link>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Projects