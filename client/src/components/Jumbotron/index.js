import React from "react";
import ScriptTag from 'react-script-tag';
import "./style.css";
import background from "../../assets/images/jumbotron/3.jpeg"

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
                <div className="position-relative">
                <h1>
                    Fancy text
                </h1>
                <p>WE DELIVER YOUR PACKAGE IN NO-TIME </p> 
                <div><ScriptTag type="text/javascript" src="https://www.uship.com/widget/getquotewidget.js?widgetstyle=vertical&color=blue&category=4&subcategory=79&z1=&z2=&country2=US&country1=US&referid=284364&widgettype=quote_widget_1_0&siteid=1&showemailaddress=true" ></ScriptTag><a>uShip Car Transport</a></div>
            </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Jumbotron;