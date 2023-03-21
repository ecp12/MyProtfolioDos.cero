import React from "react";
import "../Projects/Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Reloj from "../../Assets/Reloj.gif";
import Dillons from "../../Assets/dillons.png";
import Gentis from "../../Assets/Gentis.png";
import Sky from "../../Assets/Sky.png";

function Projects() {
  return (
    <div className="homeContine">
      <div data-aos="fade-up" class="containers">
        <span class="primary">Estos Son mis</span>
        <span class="secondary">Proyectos</span>
      </div>
      <div data-aos="fade-right" className="cardsCont">
        <ul id="cards">
          <li class="card" id="card_1">
            <div class="card__content">
              <div>
                <h2>Proyecto Gentis</h2>
                <p>
                  Un proyecto de aproximadamente un mes que se realizo para
                  cubrir las nesececidades básicas de la fundación, que era él
                  ser mas accesibles para las personas en cuanto a las busqueda
                  de cursos.
                </p>
                <p>
                  <a
                    href="https://github.com/Gentis-Team/Gentis-formacion-client"
                    class="btn btn--accent"
                  >
                    Ver Github
                  </a>
                </p>
              </div>
              <figure>
                <img src={Gentis} alt="" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_2">
            <div class="card__content">
              <div>
                <h2>AboveTheSky</h2>
                <p>
                  Proyecto que se realizó en la hackathon organizada por
                  caixabank-tech, la cual tenia como objetivo realizar una
                  eCommerce.
                </p>
                <p>
                  <a
                    href="https://github.com/ecp12/AboveTheSky"
                    class="btn btn--accent"
                  >
                    Ver Github
                  </a>
                </p>
              </div>
              <figure>
                <img src={Sky} alt="" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_3">
            <div class="card__content">
              <div>
                <h2>Reloj-Js</h2>
                <p>
                  Proyecto realizado con js con el fin de practicar y crear un
                  reloj que funcione correctamente.
                </p>
                <p>
                  <a
                    href="https://github.com/ecp12/RelojJs"
                    class="btn btn--accent"
                  >
                    Ver Github
                  </a>
                </p>
              </div>
              <figure>
                <img src={Reloj} alt="" />
              </figure>
            </div>
          </li>
          <li class="card" id="card_4">
            <div class="card__content">
              <div>
                <h2>eCommerce Dillons</h2>
                <p>
                  El Proyecto eCommerce Dillons pretendia crear una web de
                  supermercado la cual tubiera como objetivo ser accesible a las
                  personas desde cualquier dispositivo.
                </p>
                <p>
                  <a
                    href="https://github.com/ecp12/ecommerce"
                    class="btn btn--accent"
                  >
                    Ver Github
                  </a>
                </p>
              </div>
              <figure>
                <img src={Dillons} alt="" />
              </figure>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
