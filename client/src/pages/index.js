import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Contact from "../components/Contact";
import Email from "../components/Email";
// import Quote from "../components/Quote";
// import GalleryMini from "../components/GalleryMini";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
// import Quote from "../components/Quote";
import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Email/>
            <section className="contact-background">
                <div className="container" id="contact">
                    <div className="row">
                        <div className="col-md-12">
                        <Contact/>
                        </div>
                    </div>
                </div>
            </section>
            {/* <Quote/> */}
            <Testimonials/>
            <Faq />
            <Footer />
        </div>
        ) 
    }
}

  export default Home;