import React from "react";
import Nav from '../../Components/Nav'
import '../HomePage/HomePage.css'
import wave from '../../Assets/waveUno.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Astro from "../../Assets/Astro.png";
import Projects from '../Projects/Projects.jsx'
import Contact from "../ContactFrom/Contact";

export default function HomePage() {
 
  return (
    <div className="homePage">
      <Nav />
      <div data-aos="fade-up" data-aos-duration="3000" className="homeOne">
        <div className="homeChil">
          <img className="astro" src={Astro} alt="" />
          <div className="Text">
            <span className="textContent">
              Hola, Bienvenido a mi Portfolio,{" "}
              <span className="textSeg">
                en el encontraras muchos proyectos en los que he trabajado.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="homeTwo">
        <img className="waveOne" src={wave} alt="" />
        <div>
          <Projects />
        </div>
      </div>
      <div className="inter">
        <Contact/>
      </div>
      <div className="homeTree">
       footer
      </div>
    </div>
  );
}
AOS.init();