import React from 'react'
import '../ContactFrom/Contact.css'

export default function Contact() {
  return (
    <div className='formCont'>
    <form
      class="miFormulario"
      id="mi-form"
      action="https://formspree.io/f/xrgjwbog"
      method="POST"
    >
      <div className="contLetras">
        <div class="contFormulario">
          <label class="titulos">Email:</label>
          <input
            class="casillas"
            type="email"
            name="email"
            placeholder="Escribe tu Email aquí!."
          />
        </div>
        <div class="contMensaje">
          <label class="titulos">Mensaje:</label>
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
  );
}

