import React  from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import logoDos from "../../Assets/Miproyecto-1.png";
import Pdf from "../../Assets/23CVERICK.pdf";


export default function Nav () {
    return (
      <nav className="navBar">
        <div className="logo">
          <img className="imgLogo" src={logoDos} alt="" />
        </div>
        <div className="linkPage">
          <Link to="/" relative="path" className="link">
            Home
          </Link>
          <Link className="linkTwo" to="/Pokedex" relative="path">
            Pokedex
          </Link>
          <Link className="linkTwo" to="/Blog" relative="path">
            Blog
          </Link>
        </div>
        <div className="linkThree">
          <a className="linkDow" href={Pdf} download="23CVERICK">
            Descargar CV
          </a>
        </div>
      </nav>
    );
  };

