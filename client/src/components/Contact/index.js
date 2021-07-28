import React from "react";
import "./style.css";
import Hours from '../../assets/images/contact/Layer_3.png'; 
import Call from '../../assets/images/contact/Layer_4.png';
import Email from '../../assets/images/contact/Layer_5.png'; 

function Contact () {
    return (
        <section className="contact-background">
            <div className="container contact">
                <div className="row">
                    <div className="col-md-3">
                    <div className="card">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={Hours} className="img-fluid rounded-start" alt="..."/>
                                </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item" id="header">OPENING HOURS</li>
                                    <li className="list-group-item">Monday - Friday 08.00 - 5.00</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={Call} className="img-fluid rounded-start" alt="..."/>
                                </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item" id="header">CALL US ANYTIME</li>
                                    <li className="list-group-item">+1 (720) 508 4966</li>
                                    <li className="list-group-item">+1 (303) 353 8362</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={Email} className="img-fluid rounded-start" alt="..."/>
                                </div>
                            <div className="col-md-9">
                                <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item" id="header">EMAIL US</li>
                                    <li className="list-group-item">toponetransportation@gmail.com</li>
                                    <li className="list-group-item">toponetransportation@gmail.com</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>                    
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn btn-block">Request a quote</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;