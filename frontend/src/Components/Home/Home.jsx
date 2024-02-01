import React from 'react'
import './Home.css'
function Home() {
  return (
    <>
{/* ======= Hero Section ======= */}
<section id="hero" className="d-flex align-items-center hero">
    <div className="container ">
      <div className="row">
        <div className="col-lg-4 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay={200}>
          <p className='para1'>Working since 1992 <div className="hr-line"></div></p>
          <p className='hdr1'>Tuneup Your Car to Next Level</p>
          <div className="d-flex justify-content-center  gap-3 justify-content-lg-start">  
            <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className=" btn-watch-video"><i className="bi bi-play-circle-fill play"></i></a>
            <a href="#about" className=" scrollto">Watch Intro Video <br /> About Us</a>
          </div>
        </div>
        {/* <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay={200}>
          <img src="assets/img1/heroImage.jpg" className="img-fluid animated" alt />
        </div> */}
      </div>
    </div>
  </section>{/* End Hero */}
  
    </>
  


  )
}

export default Home
