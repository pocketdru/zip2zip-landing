import React from "react";
import "./style.css";
import Contact from "../Contact";

function FullFaq() {
    return (
        <section className="fullFaq pb-5">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3" id="contact">
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FullFaq;