import React from "react";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <section className="nav-background">
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 offset-4 offset-sm-4 offset-md-0 offset-lg-0">
          <a className="navbar-brand" href="/">
              <img src="/images/nav/logo.png" width="50" height="50"  className="d-block align-top" alt="" loading="lazy"/>
          </a>
          <a className="flex-sm-fill pt-2 pb-2" href="/">Top One</a>
        </div>
      <div className="col-md-9 col-lg-9">
        <nav className="nav navbar d-flex justify-content-end">
          <a className="nav-link text-sm-center" target="_blank" href="https://www.linkedin.com/company/zip-2-zip">Linkedin</a>
          <a className="nav-link text-sm-center" target="_blank" href="/">Facebook</a>
          </nav>
      </div>
      </div>
    </div> 
    </section> 
  );
}

export default Nav;