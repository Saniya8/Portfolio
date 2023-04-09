import React from 'react'
import Navbar from '../components/Navbar';
import Heroimage from '../components/Heroimage';
import Footer from "../components/Footer";
import Skills from "..//components/Skills";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Heroimage />
            <Skills />
            <Footer />
        </div>
    )
}

export default Home