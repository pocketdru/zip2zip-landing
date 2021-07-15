import React, { Component } from "react";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import Quote from "../components/Quote";
// import Footer from "../components/Footer";

class Home extends Component {
    render() {
        return (
        <div>
            <Nav/>
            <Jumbotron/>
            <Quote/>
            {/* <Footer /> */}
        </div>
        ) 
    }
}

  export default Home;