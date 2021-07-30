import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Contact from "../components/Contact";
import Email from "../components/Email";
import GalleryMini from "../components/GalleryMini";
// import Quote from "../components/Quote";
// import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Contact/>
            <GalleryMini />
            {/* <Quote/> */}
            {/* <Footer /> */}
            <Email />
        </div>
        ) 
    }
}

  export default Home;