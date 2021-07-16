import React, { Component } from "react";
import API from "../utils/Api";

import "./style.css";

class Quote extends Component {

    state = {
        clear: [],
        quote: [],
        bookSearch: ""
      };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("button works");
    }


    render() {
    return (
        <section className="quoute">
            <div className="container">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">pu zip code</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="pick up zip"/>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">delivery zip</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="delivery zip"/>
                </div>
                <button type="submit" class="btn btn-primary" onClick={this.handleFormSubmit}>submit</button>
                </form>
                </div>
        </section>
    )
    }
}
export default Quote;