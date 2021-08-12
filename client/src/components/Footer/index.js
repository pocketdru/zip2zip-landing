import React from "react";
import "./style.css";

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" href="#faq">FAQs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#email">Request a quote</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact us</a>
                            </li>

                        </ul> 
                    </div>
                    <div className="col-md-4">
                        <ul class="nav flex-column">
                            <li class="nav-item"> </li>
                        </ul>                   
                    </div>
                    <div className="col-md-4 d-flex align-self-center">
                        <button type="button" className="btn m-auto">Request a quote</button>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default Footer;