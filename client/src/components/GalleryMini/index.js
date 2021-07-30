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
                    <div className="col-md-6">
                        <div className="card border-success mb-3" style="max-width: 18rem;">
                        <div className="card-header bg-transparent border-success">Header</div>
                        <div className="card-body text-success">
                            <h5 className="card-title">Success card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <div className="card-footer bg-transparent border-success">Footer</div>
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