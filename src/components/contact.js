import React, { Component } from 'react';
import '../styles/components/contact.css';
import { Row, Col, Jumbotron } from 'reactstrap';
import FaHome from 'react-icons/lib/fa/home';
import FaMobile from 'react-icons/lib/fa/mobile';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import MapContainer from './MapContainer';
import Footer from './footer';
import WOW from "wowjs";

class Contact extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className="contact">
        <Jumbotron  className="conatct-jumbo img-fluid">
          <div className="container about-intro-con wow slideInLeft">
            <h1 className="display-3 about-title wow slideInLeft">Contact Me </h1>
            <p className="about-intro-line wow slideInLeft">Lets have a coffee and change the world</p>
          </div> 
        </Jumbotron>
  
        <div className="contact-info-cont container-fluid">
          <h3 className="display-4 get-intouch text-center wow bounceInUp" data-wow-delay=".3s" > Get in touch with Me</h3>
          <Row className="contact-row">
            <Col className="text-center" md="4">
              <div className="contact-container wow bounceInRight" data-wow-delay=".1s">
                <h4><FaHome className="contact-icons"/></h4>
                <h4>Georegtown, MA </h4>
              </div>
            </Col>
            <Col className="text-center" md="4">
              <div className="contact-container wow bounceInUp" data-wow-delay=".3s">
                <h4><FaMobile className="contact-icons"/></h4>
                <h4>978-500-4457</h4>
              </div>
            </Col>
            <Col className="text-center" md="4">
              <div className="contact-container wow bounceInLeft" data-wow-delay=".4s">
                <h4><FaHome className="contact-icons"/></h4>
                <h4>Georegtown, MA </h4>
              </div>
            </Col>
          </Row> 
        </div>
        <Row className="social-contact-row">
          <Col md="6">
            <h3 className=" text-center social-intro-contact wow rubberBand " data-wow-duration="10s">Lets get social</h3>
          </Col>
          <Col className="contact-flex text-center" md="6">
            <Col md="2">
              <a href="https://github.com/bhobbs20" className="wow bounceInRight"><FaGithubSquare className="social-contact-icon wow bounceInUp "/></a>
            </Col>
            <Col md="2">
              <a href="https://www.linkedin.com/in/brian-hobbs-181895b5/" className="wow bounceInRight"><FaLinkedinSquare className="social-contact-icon wow bounceInUp"/></a>
            </Col>
            <Col md="2">
              <a href="https://twitter.com/brianhobbs216" className="wow bounceInRight"><FaTwitter className="social-contact-icon "/></a>
            </Col>
          </Col>
        </Row>
        <div className="container-fluid map-box">   
          <MapContainer />
        </div>    
          <Footer/>
      </div> 
    );
  }
}

export default Contact;



