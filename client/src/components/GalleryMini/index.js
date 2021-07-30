import React from "react";
import "./style.css";

function GalleryMini () {
    return (
        <section className="galleryMini">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                    
                    </div>
                    <div className="col-md-6">
                        <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="..." alt="Card image cap"/>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
        </section>
    )
}

export default GalleryMini;