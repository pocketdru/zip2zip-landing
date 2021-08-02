import React from 'react';
import emailjs from 'emailjs-com';

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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
        <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number"/>
          <div className="form-group">     
            <label>Your Name</label>
            <input type="text" name="from_name" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Your Email</label>
            <input type="text" name="from_email" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Your phone number (optional)</label>
            <input type="tel" name="phone" className="form-control"/>
          </div>
          <div className="form-group">
            <label>Year, model, make of the unit you are shipping. Please note all the modifications if you have some.</label>
            <textarea name="message" />
          </div>
          <input type="submit" value="Send" className="btn"/>
        </form>
        </div>
        </div>
      </div>
    </section>
  );
}