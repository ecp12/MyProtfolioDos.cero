import React from "react";
import "../ContactFrom/Contact.css";
import Laptop from "../../Assets/laptop.glb";


 export default function Contact() {
  return (
    <div 
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      class="form-container-main"
    >
      <div class="form-container">
        <div class="form-image">
          <h1 class="montserrat">Contactame</h1>
          <model-viewer
            class="model"
            alt="laptop"
            src={Laptop}
            shadow-intensity="1"
            camera-controls
            touch-action="pan-y"
            exposure="1.4"
            disable-zoom
            disable-tap
            camera-orbit="-45deg 60deg 9m"
            autoplay
          ></model-viewer>
        </div>
        <form
          class="form"
          id="mi-form"
          action="https://formspree.io/f/xrgjwbog"
          method="POST"
        >
          <div class="contForm">
            <div>
              <input
                class="casillas"
                type="email"
                name="email"
                placeholder="Escribe tu email aquí!."
              />
            </div>
            <div>
              <textarea
                rows="5"
                className="casillasDos"
                name="message"
                id="message"
                placeholder="Escribe tu mensaje aquí!."
                required=""
              ></textarea>
            </div>
          </div>
          <button class="button accept-btn">Enviar</button>
        </form>
      </div>
    </div>
  );
}
 