import React  from "react";
import { Link } from "react-router-dom";
import './Nav.css'
import logoDos from "../../Assets/Miproyecto-1.png";
import Pdf from "../../Assets/CVERICK4.1.4.pdf";


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
          <Link className="linkTwo" to="Blog" relative="path">
            Blog
          </Link>
        </div>
        <div className="linkThree">
          <a className="linkDow" href={Pdf} download="ERICKCV4.1.2">
            Descargar CV
          </a>
        </div>
      </nav>
    );
  };

