import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Email from "../components/Email";
import Quote from "../components/Quote";
// import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Email />
            {/* <Quote/> */}
            {/* <Footer /> */}
        </div>
        ) 
    }
}

  export default Home;