import React from "react";
import "./style.css";
import Hours from '../../assets/images/contact/Layer_3.png'; 
import Call from '../../assets/images/contact/Layer_4.png';
import Email from '../../assets/images/contact/Layer_5.png'; 

function Contact () {
    return (
        <section className="contact-background">
            <div className="container" id="contact">
                <div className="row card-deck">
                    <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                        <img src={Hours} className="img-fluid rounded-start" alt="..."/>

                            <ul className="list-group">
                                <li className="list-group-item" id="header">OPENING HOURS</li>
                                <li className="list-group-item">Monday - Friday 08.00 - 5.00</li>
                            </ul>
                        </div>
                        </div> 
                        <div className="card">
                                <div className="card-body">
                                <img src={Call} className="img-fluid rounded-start" alt="..."/>
                                <ul className="list-group">
                                    <li className="list-group-item" id="header">CALL US ANYTIME</li>
                                    <li className="list-group-item">+1 (720) 508 4966</li>
                                    <li className="list-group-item">+1 (303) 353 8362</li>
                                </ul>
                        </div>                     
                    </div>
                    <div className="card">
                            <div className="row">
                                <div className="card-body">
                                <img src={Email} className="img-fluid rounded-start" alt="..."/>
                                <ul className="list-group">
                                    <li className="list-group-item" id="header">EMAIL US</li>
                                    <li className="list-group-item">toponetransportation@gmail.com</li>
                                    <li className="list-group-item">toponetransportation@gmail.com</li>
                                </ul>
                            </div>
                        </div>                    
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex align-self-center">
                        <button type="button" className="btn m-auto">Request a quote</button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;