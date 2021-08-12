import React from "react";
import "./style.css";
import GoogleIcon from '../../assets/images/testimonials/4.png'; 


function Testimonials () { 
    return (
        <section className="testimonials">
            <div className="container">
                <div className="row card-deck pt-5 pb-5">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">We use them every year for transporting our vehicles. Always on time and never any hassle. <span className="font-weight-bold">Great</span> group to work with.</p>
                        </div>
                        <div className="card-footer pt-0 d-flex justify-content-between">
                            <div>
                                <p className="card-text font-weight-bold">Mark H</p>
                            </div>
                            <img className="card-img-top" src={GoogleIcon} alt="google review"></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text"><span className="font-weight-bold">Positive:</span><span className="font-italic"> Professionalism, Punctuality, Quality</span><br/>
                            Great costumer service! Keep up the good work!</p>
                        </div>
                        <div className="card-footer pt-0 d-flex justify-content-between">
                            <div>
                                <p className="card-text font-weight-bold">Tempus Logix</p>
                            </div>
                            <img className="card-img-top" src={GoogleIcon} alt="google review"></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Great and friendly company everything was very  professionally taken care off...</p>
                        </div>
                        <div className="card-footer pt-0 d-flex justify-content-between">
                            <div>
                                <p className="card-text font-weight-bold">Dima P</p>
                            </div>
                            <img className="card-img-top" src={GoogleIcon} alt="google review"></img>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">Very reliable company. Alex the driver is punctual and professional. A+ for the company and services they provided.I will definitely have business with Top One again!</p>
                        </div>
                        <div className="card-footer pt-0 d-flex justify-content-between">
                            <div>
                                <p className="card-text font-weight-bold">Maxim G</p>
                            </div>
                            <img className="card-img-top" src={GoogleIcon} alt="google review"></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;