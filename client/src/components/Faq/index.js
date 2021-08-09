import React from "react";
import "./style.css";
import Truck1 from '../../assets/images/faq/1.jpeg'; 
import Truck2 from '../../assets/images/faq/2.jpeg'; 
import Truck3 from '../../assets/images/faq/3.jpeg'; 
import Truck4 from '../../assets/images/faq/4.jpeg'; 
import Truck5 from '../../assets/images/faq/5.jpeg'; 

function Faq () { 
    return(
        <section className="faq">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="card-group">
                            <div className="card bg-dark text-white">
                                <img src={Truck1} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title mt-5">How do I get a quote for shipping my vehicle?</h5>
                                    <button className="btn">See more</button>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img src={Truck2} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title mt-5">How do I pay for my auto shipping?</h5>
                                    <button className="btn">See more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div className="card-group">
                            <div className="card bg-dark text-white">
                                <img src={Truck3} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title mt-5">Can I pay the full transport cost with my credit card?</h5>
                                    <button className="btn">See more</button>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img src={Truck4} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title mt-5">How do I get my car ready for shipment?</h5>
                                    <button className="btn">See more</button>
                                </div>
                            </div>
                            <div className="card bg-dark text-white">
                                <img src={Truck5} className="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title mt-5">Can I ship my vehicle if it isn't running?</h5>
                                    <button className="btn">See more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq;