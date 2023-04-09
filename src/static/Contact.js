import "./Contactstyles.css";
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact from "../images/contact.jpg"
import Form from "../components/Form";

const Contact = () => {
  return (
    <div className="contact">
      <Navbar />
      <div className="cover">
        <img className="contact-img" src={contact} alt="contact" />
      </div>
      <div className="content">
        <h1>CONTACT</h1>
        <p>Lets have a chat...</p>
      </div>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact