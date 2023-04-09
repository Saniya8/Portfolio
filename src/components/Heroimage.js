import "./Heroimagestyles.css"

import React from 'react'
import heromain from "../images/heromain.jpg";
import { Link } from "react-router-dom";

const Heroimage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={heromain} alt="heromain" />
            </div>
            <div className="content">
                <h1>Hello !</h1><br/>
                <p>I'm</p>
                <h4>Saniya Rajendra Zad</h4><br/><br/><br/><br/>
                <div>
                    <Link to="/projects" className="btn">PROJECTS</Link>
                    <Link to="/contact" className="btn-light">CONTACT</Link>
                </div>
            </div>
        </div>
    )
}

export default Heroimage;