import React from "react";
import "./style.css";
import background from "../../assets/images/jumbotron/1.jpeg"

function Jumbotron() {
  return (
    <section className="jumbotron-carousel">
      <div className="container-fluid p-0">
          <div className="jumbotron jumbotron-fluid p-0">
            <img className="d-block w-100" src={background} alt="board"/>
            <div className="carousel-caption">
                <nav className="nav navbar">
                    <li className="nav-link"><a href="/">Home</a></li>
                    <li className="nav-link"><a href="/">Company</a></li>
                    <li className="nav-link"><a href="/">GLOBAL COVERAGE</a></li>
                    <li className="nav-link"><a href="/">News</a></li>
                    <li className="nav-link"><a href="/">Contact</a></li>
                    <li className="ml-2 p-3 btn"><a href="/">REQUEST A QUOTE</a></li>
                </nav>
            </div>
            <div className="carousel-caption top-50">
                <h1>
                    Ground, Air or Sea
                </h1>
                <p>WE DELIVER YOUR PACKAGE IN NO-TIME </p> 
            </div>
          </div>
      </div>
    </section>
  );
}

export default Jumbotron;