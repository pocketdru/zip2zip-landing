import React, { Component } from "react";
import Nav from "../components/Nav";
import FullFaq from "../components/FullFaq";
import Footer from "../components/Footer";
class FaqPage extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <FullFaq />
            <Footer />
        </div>
        ) 
    }
}

  export default FaqPage;