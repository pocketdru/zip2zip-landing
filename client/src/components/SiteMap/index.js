import React from "react";
import "./style.css";
import FullFaq from "../FullFaq";
import Contact from "../Contact";

function SiteMap () {
    return (
        <section className="siteMap pb-5">
            <div className="container pt-5 pb-5">
                <div className="row">
                    <div className="col-md-9">
                        <FullFaq />
                    </div>
                    <div className="col-md-3" id="contact">
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteMap;