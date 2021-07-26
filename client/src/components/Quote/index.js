import React, { Component } from "react";
import API from "../utils/Api";

import "./style.css";

class Quote extends Component {

    componentDidMount() {
        const apiURL = ""
    }

    state = {
        price: 0,
        address: [],
        quote: [],
        bookSearch: ""
      };

    
    apiCall = () => {

        console.log(this.refs.puZip.value);
        console.log(this.refs.delZip.value);
        var myHeaders = new Headers();
        myHeaders.append("Host", "api.shipengine.com");
        myHeaders.append("API-Key", "TEST_WKICVdlwCQPVDQk5EDv2pZaTX8myOr62GOOeT7jxO1c");
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Origin','http://localhost:3000');


        var raw = JSON.stringify({"rate_options":{"carrier_ids":["se-656576"]},"shipment":{"validate_address":"no_validation","ship_to":{"name":"Amanda Miller","phone":"555-555-5555","address_line1":"525 S Winchester Blvd","city_locality":"San Jose","state_province":"CA","postal_code":"95128","country_code":"US","address_residential_indicator":"yes"},"ship_from":{"company_name":"Example Corp.","name":"John Doe","phone":"111-111-1111","address_line1":"4009 Marathon Blvd","address_line2":"Suite 300","city_locality":"Austin","state_province":"TX","postal_code":"78756","country_code":"US","address_residential_indicator":"no"},"packages":[{"weight":{"value":1,"unit":"ounce"}}]}});
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        
        fetch("/v1/rates", requestOptions)
          .then(response => response.text())
          .then(result => {
            const obj = JSON.parse(result)
            console.log(result);
            console.log(obj)
            console.log(obj.rate_response.rates[1].shipping_amount.amount)
            this.setState({
                price: obj.rate_response.rates[1].shipping_amount.amount
            })
        }
            )

    }

      
    handleFormSubmit = event => {
        event.preventDefault();
        const collections = [];
        // var newAddress ={
        //     pickUp: this.refs.puZip.value,
        //     deliivery: this.refs.delZip.value
        // }
        // collections.push(newAddress)
        // console.log(newAddress);
        // this.setState({address: newAddress})
        this.apiCall();

    }

    newAddress = () => {
        console.log("here")
    }


    render() {
    return (
        <section className="quoute">
            <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">pu zip code</label>
                    <input ref="puZip" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="pick up zip"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">delivery zip</label>
                    <input ref="delZip" type="text" className="form-control" id="exampleInputPassword1" placeholder="delivery zip"/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.handleFormSubmit}>submit</button>
                </form>
                <p>{this.state.price}</p>
                </div>
        </section>
    )
    }
}
export default Quote;