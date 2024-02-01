import React from "react";
import './About.css'

function About() {
  return (
    <div>
      {/* ======= About Us Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          {/* <div className="section-title">
        <h2>About Us</h2>
      </div> */}
          <div className="row content g-0">
            <div className="col-lg-5 pl-lg-2">
              <div>
                <img src="/assets/img1/workshop.png" alt="about us img" />
              </div>
            </div>
            <div className="col-lg-7 pt-4 pt-lg-0 pl-lg-4 ml-4">
              <p>Welcome to Our Workshop</p>
              <h2>We have 24 years experience</h2>
              <div className="hr-line2"></div>

              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day, going forward, a
                new normal that has evolved from generation X is on the runway
                heading towards a streamlined cloud solution. User generated
                content in real-time will have multiple touchpoints for
                offshoring. <br/> <br /> Capitalize on low hanging fruit to identify a
                ballpark value added activity to beta test. Override the digital
                divide with additional clickthroughs from DevOps. Nanotechnology
                immersion along the information highway will close the loop on
                focusing.
              </p>

              <a href="https://www.youtube.com/watch?v=JsGumVTyzDo" target="_blank" rel="noopener noreferrer" className="btn-learn-more">
  About Us <i className="bi bi-arrow-right"></i>
</a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </div>
  );
}

export default About;
