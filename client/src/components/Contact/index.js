import React from "react";
import "./style.css";
import Hours from '../../assets/images/contact/Layer_3.png'; 



function Contact () {
    return (
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                    <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={Hours} className="img-fluid rounded-start" alt="..."/>
                                </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                    <li class="list-group-item">A fourth item</li>
                                    <li class="list-group-item">And a fifth one</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={Hours} className="img-fluid rounded-start" alt="..."/>
                                </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                    <li class="list-group-item">A fourth item</li>
                                    <li class="list-group-item">And a fifth one</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>                     
                    </div>
                    <div className="col-md-3">
                    <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={Hours} className="img-fluid rounded-start" alt="..."/>
                                </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <ul class="list-group">
                                    <li class="list-group-item">An item</li>
                                    <li class="list-group-item">A second item</li>
                                    <li class="list-group-item">A third item</li>
                                    <li class="list-group-item">A fourth item</li>
                                    <li class="list-group-item">And a fifth one</li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>                    
                    </div>
                    <div className="col-md-3">
                        <button type="button" className="btn">Primary</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;