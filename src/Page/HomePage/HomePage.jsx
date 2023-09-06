import React from "react";
import Nav from '../../Components/Navbar/Nav'
import Footer from '../../Components/Footer/Footer.jsx'
import '../HomePage/HomePage.css'
import wave from '../../Assets/waveUno.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Astro from "../../Assets/Astro.png";
import Projects from '../Projects/Projects.jsx'
import Contact from "../ContactFrom/Contact";

export default function HomePage() {
 window.onload = function () {
   
   var arrowUp = document.querySelector(".arrow-up");
   var intervalId = 0;

   
   function toggleArrow(e) {
     if (window.scrollY >= 20) {
       arrowUp.classList.add("is-block");

       setTimeout(function () {
         arrowUp.classList.add("is-opacity");
       }, 10);
     } else {
       arrowUp.classList.remove("is-opacity");
     }
   }

   function scrollStep() {
     if (window.pageYOffset === 0) {
       clearInterval(intervalId);
     }
     window.scroll(0, window.pageYOffset - 50);
   }

   function scrollToTop() {
     intervalId = setInterval(scrollStep, 5.36);
   }

   
   arrowUp.addEventListener("click", scrollToTop);
   window.addEventListener("scroll", toggleArrow);
 };
  return (
    <div className="homePage">
      <Nav />

      <div data-aos="fade-up" data-aos-duration="3000" className="homeOne">
        <button class="arrow-up">
          <i class="fa fa-chevron-up">
            <lord-icon
              className="icon"
              src="https://cdn.lordicon.com/ofwpzftr.json"
              trigger="hover"
              colors="primary:#EF8A33"
            ></lord-icon>
          </i>
        </button>
        <div className="homeChil">
          <img className="astro" src={Astro} alt="" />
          <div className="Text">
            <span className="textContent">
              Hola, Bienvenidos a mi Portfolio,{" "}
              <span className="textSeg">
                en el encontraras proyectos en los que he trabajado.
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
        <Contact />
      </div>

      <div className="homeTree">
        <Footer />
      </div>
    </div>
  );
}
AOS.init();