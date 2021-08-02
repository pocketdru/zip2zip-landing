import React from "react";
import "./style.css";
import Truck1 from '../../assets/images/galleryMini/1.gif'; 
import Truck2 from '../../assets/images/galleryMini/2.gif';
import Truck3 from '../../assets/images/galleryMini/3.gif'; 

function GalleryMini () {
    return (
        <section className="galleryMini">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 card-background">
                        <div className="card mb-3 mt-5 mb-5">
                        <div className="card-body mt-5">
                            <h5 className="card-title mt-5 mb-5">Fleet Gallery</h5>
                            <button className="btn card-text mb-5">View All</button>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src={Truck1} alt="Card image cap"/>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={Truck2} alt="Card image cap"/>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={Truck3} alt="Card image cap"/>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default GalleryMini;