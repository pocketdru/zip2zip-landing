import React from 'react';
import emailjs from 'emailjs-com';
import "./style.css";

export default function QuoteEmail() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_752idno', 'template_f0mcw4u', e.target, 'user_Qv5eynQ9bFuznSm26mu6r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
//   var yearOptions = [];
// for (var i = 2022; i > 1899; i--) {
//     yearOptions.push((i));
// }

// var cars = [
//   {make: "Acura", model: ["ILX", "MDX", "NSX", "RDX", "RLX", "TLX"]},
//   {make: "Alfa Romeo", model: ["4C", "Giulia", "Giulia Quadrifoglio", "Stelvio", "Stelvio Quadrifoglio"]},
//   {make: "Aston Martin", model: ["DB11", "DBS", "Vantage"]},
//   {make: "Audi", model: ["A4", "A4 allroad", "A5", "A5 Sportback", "A6", "A6 allroad", "A7", "A8 L", "e-tron", "Q3", "Q5", "Q5 Sportback", "Q7", "Q8", "R8", "RS 5", "RS 5 Sportback", "RS 6", "RS 7", "RS Q8", "S4", "S5", "S5 sportback", "S6", "S7", "S8", "SQ5", "SQ5 Sportback", "SQ7", "SQ8", "TT", "TT RS", "TTS"]},
//   {make: "Bentley", model: ["Bentayga", "Continental", "Flying Spur", "Mulsanne"]},

  
// ]
  return (
    <section id="email">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-12">
            <h5 className="card-title mt-5 mb-5">REQUEST A QUICK QUOTE</h5>
          </div>
          <div className="col-md-12">
        <form className="contact-form needs-validation pb-4" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number"/>
          <div className="form-row">
          <div className="form-group col-md-4">     
            <label>Your Name</label>
            <input type="text" name="from_name" className="form-control" required/>
          </div>
          <div className="form-group col-md-4">
            <label>Your Email</label>
            <input type="email" name="from_email" className="form-control" required/>
          </div>
          <div className="form-group col-md-4">
            <label>Your phone number (optional)</label>
            <input type="tel" name="phone" className="form-control"/>
          </div>
          </div>
          {/* <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="inputState">Vehicle year</label>
            <select id="inputState" className="form-control" name="year">
            <option>Select</option>
              {yearOptions.map(function(year, i){
                return <option key={i}>{year}</option>
              })}
            </select>
          </div>
          </div> */}
          <div className="form-group">
            <label>Year, model, make of the unit you are shipping. Please note all the modifications if you have some.</label>
            <textarea name="message" required/>
          </div>
          <input type="submit" value="SEND MESSAGE" className="btn d-block mx-auto pl-4 pr-4 pt-3 pb-3"/>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
}