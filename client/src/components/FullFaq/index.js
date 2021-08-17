import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./style.css";

class FullFaq extends Component {
    render () {
    return (
        <section className="fullFaq pb-5">
           <div className="container pt-5 pb-5">
               <div className="row">
                   <div className="col-md-12">
                        <h3 className="card-title text-center">FAQs</h3>
                   </div>
               </div>
               <Tab.Container id="left-tabs-example" defaultActiveKey="">
               <div className="row">
                   <div className="col-md-3">
                   <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>                       
                        <Nav.Item>
                        <Nav.Link eventKey="fourth">Tab 4</Nav.Link>
                        </Nav.Item>                        
                        <Nav.Item>
                        <Nav.Link eventKey="fifth">Tab 5</Nav.Link>
                        </Nav.Item>                        
                        <Nav.Item>
                        <Nav.Link eventKey="sixth">Tab 6</Nav.Link>
                        </Nav.Item>
                    </Nav>
                   </div>
                   <div className="col-md-9">
                   <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <Tabs defaultActiveKey="" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Home">
                                    <p>1</p>
                                </Tab>
                        </Tabs>
                        <Tabs defaultActiveKey="" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="profile" title="Profile">
                                    <p>2</p>
                                </Tab>
                        </Tabs>                        
                        <Tabs defaultActiveKey="" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="contact" title="Contact">
                                    <p>3</p>
                                </Tab>
                        </Tabs>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>2</p>
                    </Tab.Pane>
                    </Tab.Content>
                   </div>
               </div>
               </Tab.Container>
           </div>
        </section>
    )
    }

}

export default FullFaq;