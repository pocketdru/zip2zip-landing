import { func } from "prop-types";
import React, { Component } from "react";
import "./style.css";

class FullFaq extends Component {
    state = {
        isBoxVisible:false
      };

    toggleTab = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
        console.log(this._div.id);
        var tab = this._div;
        console.log(tab.id);
        var NewClass = "";

        if (this._div.className === "tab-pane fade show active") {
            NewClass = "tab-pane fade";
        } else {
            NewClass = "tab-pane fade show active";
        }
        this._div.focus();

        this._div.className=NewClass;
    }

    render () {
        const { isBoxVisible } = this.state;
        var self = this;
    return (
        // <section className="fullFaq pb-5">
        //     <div className="container pt-5 pb-5">
        //         <div className="row">
        //             <div className="col-md-12">
        //                 <h3 className="card-title text-center">FAQs</h3>
        //             </div>
        //         </div>
        //         <div className="row">
        //             <div className="col-md-3">
        //                 <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
        //                     <a className="nav-link active" id="v-pills-pricing-tab" data-toggle="pill" href="#v-pills-pricing" role="tab" aria-controls="v-pills-pricing" aria-selected="true">
        //                         Pricing
        //                     </a>
        //                     <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
        //                     <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
        //                     <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
        //                 </div>
        //             </div>
        //             <div className="col-md-9">    
        //                 <div className="tab-content" id="v-pills-tabContent">
        //                 <div className="tab-pane fade show active" id="v-pills-pricing" role="tabpanel" aria-labelledby="v-pills-pricing-tab">
        //                {/*  */}
        //                 <nav>
        //                 <div className="nav nav-tabs" id="nav-tab" role="tablist">
        //                     <a className={`nav-item nav-link ${isBoxVisible ? "active" : ""}`} id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true" onClick={this.toggleTab}>How do I get a quote for shipping my vehicle?</a>
        //                     <div className="tab-content" id="nav-tabContent">
        //                         <div ref={function (el) {
        //                             self._div = el;
        //                         }
        //                         }className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">To get a quote for shipping your vehicle, you can either email us or you can call (303) 353-8362 to receive a quote from one of our car transport pricing specialists. In order for us to calculate your quote we will need to know the location you are shipping from and to, the type of vehicle you would like to ship, and the date your vehicle will be ready.</div>
        //                     </div>

        //                     <a className={`nav-item nav-link ${isBoxVisible ? "active" : ""}`} id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false" onClick={this.toggleTab}>How is my car shipping cost calculated?</a>
        //                     <div className="tab-content" id="nav-tabContent">
        //                         <div ref={function (el) {
        //                             self._div = el;
        //                         }
        //                         } className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">When determining your car shipping cost, there are a few factors that we take into account in order to provide you with an accurate price quote. The mileage between the origin and destination is the biggest factor that contributes to your total rate. In addition to the distance of your relocation, another factor is the type and condition of the vehicle being shipped. The final factor is the date that your vehicle will be ready for transport. There are also additional options, such as enclosed carrier and top-load service that can be added to your shipment at the time of booking for a higher level of service.</div>
        //                    </div>

        //                     <a className={`nav-item nav-link ${isBoxVisible ? "active" : ""}`} data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false" onClick={this.toggleTab}>How do I pay for my auto shipping?</a>
        //                     <div className="tab-content" id="nav-tabContent">
        //                         <div ref={function (el) {
        //                             self._div = el;
        //                         }
        //                         } className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">We accept all major credit cards, electronic transfer, postal money order, and bank/certified check for the deposit or full pre-payment of your shipment. If a balance is due upon delivery, it can be paid directly to the driver and can be paid in either cash, bank/certified check, or postal money order.</div>
        //                     </div>
        //                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Can I pay the full transport cost with my credit card?</a>
        //                    <div className="tab-content" id="nav-tabContent">
        //                         <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">Yes, you can pay the full transport cost via credit card. If you want to pay in full online, you can do so at the time of booking either online or by phone with a shipping agent. With this option, you can make a convenient, one-time payment with a credit or debit card. You also have the option of paying a deposit with your credit card and then paying the rest of your remining balance with cash upon delivery.</div>
        //                     </div>
        //                 </div>
        //                 </nav>
        //                 </div>

        //                 {/*  */}
        //                 <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
        //                 <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
        //                 <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
        <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
    >
        <Tab eventKey="home" title="Home">
        <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
        <Sonnet />
        </Tab>
    </Tabs>
    }
}

export default FullFaq;