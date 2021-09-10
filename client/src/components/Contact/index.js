import React from "react";
import "./style.css";
import Hours from '../../assets/images/contact/Layer_3.png'; 
import Call from '../../assets/images/contact/Layer_4.png';
import Email from '../../assets/images/contact/Layer_5.png'; 

function Contact () {
    return (
    <div className="card-deck">
        <div className="card">
            <div className="card-body">
                <img src={Hours} className="img-fluid rounded-start" alt="..."/>
                <ul className="list-group">
                    <li className="list-group-item" id="header">Hours of operation</li>
                    <li className="list-group-item">Monday - Friday 08.00 - 4.00</li>
                </ul>
            </div>
        </div> 
        <div className="card">
            <div className="card-body">
                <img src={Call} className="img-fluid rounded-start" alt="..."/>
                <ul className="list-group">
                    <li className="list-group-item" id="header">Give us a call</li>
                    <li className="list-group-item">+1 (303) 353 8362</li>
                </ul>
            </div>                     
        </div>
        <div className="card">
            <div className="card-body">
                <img src={Email} className="img-fluid rounded-start" alt="..."/>
                <ul className="list-group">
                    <li className="list-group-item" id="header">EMAIL US</li>
                    <li className="list-group-item">toponedispatch@gmail.com</li>
                </ul>
            </div>                    
        </div>
        <div className="card d-flex align-self-center">
            <a href="#email" className="btn">Request a quote</a>
        </div>
    </div>
    )
}

export default Contact;