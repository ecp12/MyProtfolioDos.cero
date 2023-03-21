import React from 'react'
import '../Footer/Footer.css'

export default function Footer () {
  return (
    <footer class="footer">
      <div class="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>
      <ul class="social-icon">
        <li class="social-icon__item">
          <a class="social-icon__link" href="https://github.com/ecp12">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>
        <li class="social-icon__item">
          <a
            class="social-icon__link"
            href="https://www.linkedin.com/in/erick-crespin-b80a9a9b/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>
      </ul>
      <ul class="menu">
        <li class="menu__item">
          <a class="menu__link" href="#">
            Home
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="#">
            About
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link" href="https://github.com/ecp12">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
}

 