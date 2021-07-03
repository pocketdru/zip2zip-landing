import React from "react";
import "./style.css";

function Nav() {
  return (
    <section className="nav-background">
    <div className="container">
      <div className="row">
        <div className="col-6 col-sm-6 col-md-3 col-lg-3 offset-4 offset-sm-4 offset-md-0 offset-lg-0">

          <a className="navbar-brand flex-sm-fill text-sm-center pt-2 pb-2" href="/">Atlantida</a>    
        </div>
      <div className="col-md-7 col-lg-6">
        <nav className="nav navbar nav-pills d-flex justify-content-center">
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Home</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">About</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Services</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">History</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Team</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Portfolio</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Prices</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="blog">Blog</a>
          <a className="nav-link flex-sm-fill text-sm-center" href="/">Contact</a>
          </nav>
        </div>
        <div  className="col-6 offset-1 col-sm-6 offset-sm-1 col-md-2 offset-md-0 col-lg-3 offset-lg-0">
        </div>
      </div>
    </div> 
    </section> 
  );
}

export default Nav;