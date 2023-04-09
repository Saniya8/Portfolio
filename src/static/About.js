import "./Aboutstyles.css";
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import about from "../images/about.jpg";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="cover">
        <img className="about-img" src={about} alt="about" />
      </div>
      <div className="content">
        <h1 align="center">ABOUT</h1>
      </div>
      <div className="content-container">
        <div className="border">
          <p>
            Hello, I'm Saniya Zad and I'm a frontend developer. I create user-friendly websites using HTML, CSS, and JavaScript.
          </p><br />
          <p>
            My passion for web development started 6 months ago when I built my first website.
            Since then, I've been constantly learning and improving my skills.
          </p><br />
          <p>
            I love the challenge of turning designs into fully functional websites and creating a great user experience for visitors.
            When I'm not coding, you can find me exploring more about web development trends, or attending meetups and conferences to stay up-to-date with the latest industry developments.
          </p><br />
          <p>
            If you're looking for a frontend developer who is committed to delivering good-quality code and exceptional user experiences, please feel free to get in touch!
          </p><br />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About