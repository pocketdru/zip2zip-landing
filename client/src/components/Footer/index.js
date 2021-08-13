import React from "react";
import "./style.css";
import logo from "../../assets/images/nav/logo.png";

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-flex align-self-center justify-content-start">
                        <img src={logo} className="card-img-top" alt="logo" />
                    </div> 
                    <div className="col-md-4">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#faq">FAQs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#email">Request a quote</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact us</a>
                            </li>

                        </ul> 
                    </div>
                    <div className="col-md-4 align-items-end">
                        <ul className="nav flex-column">
                            <li className="nav-item align-text-bottom">&copy; 2021 Top One Transportation</li>
                        </ul>                   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;