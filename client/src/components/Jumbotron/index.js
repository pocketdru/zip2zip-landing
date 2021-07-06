import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <section className="jumbotron-carousel">
      <div className="container-fluid p-0">
          <div className="jumbotron jumbotron-fluid p-0">
            <img className="d-block w-100" src="/images/jumbotron/pexels-photoscom-93398.jpeg" alt="board"/>
            <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 offset-4 offset-sm-4 offset-md-0 offset-lg-0">
          <div className="navbar-brand position-absolute p-4" href="/">
              <img src="/images/nav/logo.png" width="50" height="50"  className="d-block align-top ml-auto mr-auto mt-3" alt="" loading="lazy"/>
              <a className="flex-sm-fill pt-2 pb-2 d-block" href="/">Top One</a>
          </div>
        </div>
      <div className="col-md-9 col-lg-9">
        <nav className="nav navbar d-flex justify-content-end">
          <a className="nav-link text-sm-center" target="_blank" href="https://www.linkedin.com/company/zip-2-zip">
          </a>
          <a className="nav-link text-sm-center" target="_blank" href="https://www.linkedin.com/company/zip-2-zip">
          </a>
          </nav>
      </div>
      </div>
    </div> 
          </div>
      </div>
    </section>
  );
}

export default Jumbotron;