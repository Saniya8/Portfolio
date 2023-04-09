import "./Footerstyles.css"
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={60} style={{ color: "beige", marginRight: "2rem" }} />
            <div>
              <p>A-2 Gaondevi Krupa, Shri Gaondevi Complex, Jijai Nagar,
              Gograsswadi, Dombivili [East] 421201.</p>
            </div>

          </div>
          <div className="phone">
            <h4>
              <a href="tel:8291041169"><FaPhone size={20} style={{ color: "beige", marginRight: "2rem" }} />
                8291041169</a>
            </h4>
          </div>
          <div className="mail">
            <h4>
              <a href="mailto:saniyazad75@gmail.com"><FaMailBulk size={20} style={{ color: "beige", marginRight: "2rem" }} />
                saniyazad75@gmail.com</a>
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>I'm a Front end developer.</p>
          <div className="social">
            <a href="https://www.linkedin.com/in/saniya-zad-93902b213/"><FaLinkedin size={20} style={{ color: "beige", marginRight: "2rem" }} /></a>
            <a href="https://github.com/Saniya8"><FaGithub size={20} style={{ color: "beige", marginRight: "2rem" }} /></a>
            <a href="https://instagram.com/__.saniya.8__"><FaInstagram size={20} style={{ color: "beige", marginRight: "2rem" }} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer