import React  from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import logoDos from "../../Assets/Miproyecto-1.png";
import Pdf from "../../Assets/ERICKCV4.1.1.pdf";


export default function Nav () {
    return (
      <nav className="navBar">
        <div className="logo">
          <img className="imgLogo" src={logoDos} alt="" />
        </div>
        <div className="linkPage">
          
            <a className="link"href={Pdf} download="ERICKCV4.1.1">
              Descargar CV
            </a>
          
          <Link className="linkTwo"  >
            Contacta me
          </Link>
        </div>
        <div className="linkThree">
          <Link className="linkDow" >
            Proyectos
          </Link>
        </div>
      </nav>
    );
  };

