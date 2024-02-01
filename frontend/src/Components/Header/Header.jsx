import React from 'react'
import Home from '../Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Contact from './Pages/Contact/Contact';
import Team from './Pages/Team/Team';
import SignUp from  './Pages/SignUp/SignUp';
import './Header.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
function Header() {
  return (
    <div>
  {/* ======= Header ======= */}
  <header id="header" className="fixed-top bg-light">
    <div className="container d-flex align-items-center text-dark">
      <h1 className="logo me-auto"><a href="#hero"><img src="/assets/img1/logo.png" alt='logo'/></a></h1>
      {/* Uncomment below if you prefer to use an image logo */}
      {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
      <nav id="navbar" className="navbar">
        <ul className='h_links'>
          <li><a className="nav-link  active" href="#hero">Home</a></li>
          <li><a className="nav-link text-dark" href="#about">About</a></li>
          <li><a className="nav-link  text-dark" href="#services">Services</a></li>
          {/* <li><a className="nav-link    text-dark" href="#portfolio">Portfolio</a></li> */}
          <li><a className="nav-link  text-dark" href="#team">Team</a></li>
          {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down" /></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right" /></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a className="nav-link  text-dark" href="#contact">Contact</a></li>
          <li><a className="getstarted  text-dark" href="#about">Sign Up</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle" />
      </nav>{/* .navbar */}
    </div>
  </header>{/* End Header */}
  {/* ======= Hero Section ======= */}
  {/* <section id="hero" className="d-flex align-items-center">
    <Home />
  </section> */}
  {/* ======= End of Hero Section ======= */}
  {/* ======= About Us Section ======= */}

  {/* <section id="about" className="about">
    <About />
    </section> */}
    {/* =======End Of About Us Section ======= */}
{/* ======= Services Section ======= */}
{/* <section id="services" className="services section-bg">
<Services />
</section> */}
{/* ======= End Of Services Section ======= */}
 {/* ======= Team Section ======= */}
{/* <section id="team" className="team section-bg">
    <Team />
    </section> */}
    {/*  ======= End Of Team Section ======= */}
 {/* ======= Contact Section ======= */}
 {/* <section id="contact" className="contact">
  <Contact />
  </section> */}
  {/* ======= End Of Contact Section ======= */}
 
</div>

  )
}

export default Header
