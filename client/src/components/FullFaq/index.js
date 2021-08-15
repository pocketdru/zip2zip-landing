import React from "react";
import "./style.css";
import Contact from "../Contact";

function FullFaq() {
    return (
        <section className="fullFaq">
            <div className="container">
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3">
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullFaq;