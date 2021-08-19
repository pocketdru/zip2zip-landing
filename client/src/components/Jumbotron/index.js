import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <section className="jumbotron-carousel">
      <div className="container">
        <div className="col-9 offset-3 col-sm-9 offset-sm-3 col-md-10 offset-md-2 col-lg-12 offset-lg-0 col-xl-12">
          <div className="jumbotron pt-5 pl-0 pr-0 pb-0">
            {/* <img className="d-block w-100" src={background} alt="board"/> */}
            <div className="carousel-caption pt-5 mb-5">
                <nav className="nav navbar">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/">Company</a></li>
                    <li className="nav-link"><a href="/">GLOBAL COVERAGE</a></li>
                    <li className="nav-link"><a href="/">News</a></li>
                    <li className="nav-link"><a href="/">Contact</a></li>
                    <li className="nav-link"><a className="btn p-3" href="/">REQUEST A QUOTE </a></li>
                </nav>
            </div>
            <div className="mt-5 mb-5 text-right">
                <h1 className="mr-5">
                    Fancy text
                </h1>
                <p>WE DELIVER YOUR PACKAGE IN NO-TIME </p> 
            </div>
          </div>
          </div>
      </div>
    </section>
  );
}

export default Jumbotron;