import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <section className="jumbotron-carousel">
      <div className="container">
        <div className="col-9 offset-3 col-sm-9 offset-sm-3 col-md-10 offset-md-2 col-lg-12 offset-lg-0 col-xl-12">
          <div className="jumbotron pt-5 pb-5 pl-0 pr-0 pb-0">
            {/* <img className="d-block w-100" src={background} alt="board"/> */}
            <div className="carousel-caption pt-5 mb-5">
                <nav className="nav navbar">
                    <li className="nav-link home-mobile"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="#contact">Contact Us</a></li>
                    <li className="nav-link"><a href="#testimonials">Testimonials</a></li>
                    <li className="nav-link"><a className="btn p-3" href="#email">REQUEST A QUOTE </a></li>
                </nav>
            </div>
            <div className="mt-5 mb-5 text-right">
                <h1 className="mr-5">
                  Right choice – right move
                </h1>
                <p>We are small family owned company that treats you like family</p> 
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Jumbotron;