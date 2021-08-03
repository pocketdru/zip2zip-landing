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

  return (
    <section className="email">
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
          <div className="form-group">
            <label>Year, model, make of the unit you are shipping. Please note all the modifications if you have some.</label>
            <textarea name="message" required/>
          </div>
          <input type="submit" value="SEND MESSAGE" className="btn mx-auto pl-4 pr-4 pt-3 pb-3"/>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
}