import React from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import logoDos from "../Assets/Miproyecto-1.png";
export default function Nav () {
    return (
      <nav className="navBar">
        <div className="logo">
          <img className="imgLogo" src={logoDos} alt="" />
        </div>
        <div className="linkPage">
          <Link className="link" to="" relative="path">
            Descragar CV
          </Link>
          <Link className="linkTwo" to="" relative="path">
            Contacta me
          </Link>
        </div>
        <div className="linkThree">
          <Link className="linkDow" to="" relative="path">
            Proyectos
          </Link>
        </div>
      </nav>
    );
  };

