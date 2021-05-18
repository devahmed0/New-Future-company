import React from 'react'
import Headertop from "../components/Headertop";
import Headermidel from "../components/Headermidel";
import Navmenu from "../components/Navmenu";
import Mainslider from "../components/Mainslider";
import Blockserv from "../components/Blockserv";
import Projects from "../components/Projects";
import Aboutshort from "../components/Aboutshort";
import Counterup from "../components/Counterup";
import Servicesshort from "../components/Servicesshort";
import Cta from "../components/Cta";
import ProgressTab from "../components/ProgressTab";
import Testimonial from "../components/Testimonial";
import VideoAccordian from "../components/VideoAccordian";
import Blogshort from "../components/Blogshort";
import Clientslider from "../components/Clientslider";
import Footer from "../components/Footer";
const Home = () => {
    return (
        <>
        <header className="header-area">
        <Headertop />
        <Headermidel />
      </header>
      <div className="hero-area">
        <Navmenu />
        <Mainslider />
        <Blockserv />
      </div>
      <Projects />
      <Aboutshort />
      <Counterup />
      <Servicesshort />
      <Cta />

      <ProgressTab />
      <Testimonial />
      <VideoAccordian />
      <Blogshort />
      <Clientslider />
      <Footer />

      </>
      
    )
}

export default Home
