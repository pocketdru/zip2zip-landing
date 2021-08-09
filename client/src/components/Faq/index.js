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
                        <div class="card-group">
                            <div class="card bg-dark text-white">
                                <img src={Truck1} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                            <div class="card bg-dark text-white">
                                <img src={Truck2} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 p-0">
                        <div class="card-group">
                            <div class="card bg-dark text-white">
                                <img src={Truck3} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                            <div class="card bg-dark text-white">
                                <img src={Truck4} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
                                </div>
                            </div>
                            <div class="card bg-dark text-white">
                                <img src={Truck5} class="card-img" alt="..."/>
                                <div class="card-img-overlay">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p class="card-text">Last updated 3 mins ago</p>
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