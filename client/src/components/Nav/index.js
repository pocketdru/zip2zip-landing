import React from "react";
import "./style.css";
import logo from "../../assets/images/nav/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <section className="nav-background">
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 offset-4 offset-sm-4 offset-md-0 offset-lg-0">
          <div className="navbar-brand position-absolute p-4" href="/">
              <img src={logo} width="50" height="50"  className="d-block align-top ml-auto mr-auto mt-3" alt="" loading="lazy"/>
              <a className="flex-sm-fill pt-2 pb-2 d-block" href="/">Top One</a>
          </div>
        </div>
      <div className="col-md-9 col-lg-9">
        <nav className="nav navbar d-flex justify-content-end">
          <a className="nav-link text-sm-center mt-2 mb-3" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/zip-2-zip">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a className="nav-link text-sm-center mt-2 mb-3" target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/zip-2-zip">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          </nav>
      </div>
      </div>
    </div> 
    </section> 
  );
}

export default Nav;