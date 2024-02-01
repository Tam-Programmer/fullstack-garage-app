import React from "react";
import './Contact.css'
function Contact() {
  return (
    <div>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          {/* <div className="section-title">
        
      </div> */}
          <h2 className="d-flex hrline">Contact <div className="hr-line bg-"></div></h2>
          <h3>Schedule Your Appointment Today</h3>
          <p>Your Automotive Repair and Maintenance Service Specialist</p>

          <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Adama, Ethiopia</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>tamateshome5@gmail.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>+251913519772</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.2819621269155!2d39.291879973747655!3d8.56886369602448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b1fe4c294e6cb%3A0x6b86d6a89f24215c!2sAdama%20Science%20And%20Technology%20University%20-%20ASTU!5e0!3m2!1sam!2set!4v1706769504666!5m2!1sam!2set"
                  style={{ width: "1200", height: "900", border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
             frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen /> */}
              </div>
            </div>
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </div>
  );
}

export default Contact;
