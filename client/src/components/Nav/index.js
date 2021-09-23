import React from "react";
import "./style.css";
import logo from "../../assets/images/nav/logo-3.png";
function Nav() {
  return (
    <section className="nav-background">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12">
          <div className="navbar-brand position-absolute px-2 py-1" href="/">
              <img src={logo} className="d-block align-top m-auto" alt="Top One Transportation logo" loading="lazy"/>
              <a className="flex-sm-fill d-block" href="/">Top One<br/><span className="transportation">Transportation</span>
              <br/>
              <span className="transportation">since 2008</span></a>
          </div>
        </div>
      </div>
    </div> 
    </section> 
  );
}
export default Nav;