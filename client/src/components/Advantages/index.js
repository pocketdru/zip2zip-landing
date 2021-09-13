import React from "react";
import "./style.css";
import Car from '../../assets/images/advantages/car-insurance.png'; 
import Money from '../../assets/images/advantages/money-saving.png';
import Map from '../../assets/images/advantages/road-map.png';
import Rating from '../../assets/images/advantages/star-rating.png';
import Us from '../../assets/images/advantages/about-us.png';
import Personal from '../../assets/images/advantages/young.png';


function Advantages () {
        return (
        <section className="advantages">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Rating} className="img-fluid rounded-start" alt="rating"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Top-Rated Auto Shipping</h5>
                            <p className="card-text">We have hundreds of 5-star reviews for exceptional vehicle shipping services.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Map} className="img-fluid rounded-start" alt="map"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Nationwide Door-to-Door Service</h5>
                        <p className="card-text">We provide direct service to and from any residential or business location in the US.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={Car} className="img-fluid rounded-start" alt="car"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Complete Vehicle Coverage</h5>
                                <p className="card-text">Our selected auto haulers must meet insurance standards before qualifying to be part of our carrier network.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Money} className="img-fluid rounded-start" alt="money"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">No Up-Front Deposit Required</h5>
                            <p className="card-text">You don't pay a penny until the day your shipment is scheduled for pickup.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Us} className="img-fluid rounded-start" alt="money"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Leave it to the pros</h5>
                            <p className="card-text">Your car will get from point A to point B without you having to break a single sweat. By having your car delivered straight to your door, you’re allowing the experts to handle every step of the process and ensure there are no speed bumps along the way.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={Personal} className="img-fluid rounded-start" alt="money"/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Personalized approach</h5>
                            <p className="card-text">Why choose our company? Top One Transportation works with you through every step of your car or truck’s move. Experience hassle-free shipping when you choose us as your car transporter and enjoy an easy and painless shipment process.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        )
}

export default Advantages;