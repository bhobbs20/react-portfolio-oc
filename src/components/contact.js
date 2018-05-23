import React, { Component } from 'react';
import '../styles/components/contact.css';
import { Row, Col, Jumbotron, Button } from 'reactstrap';
import FaHome from 'react-icons/lib/fa/home';
import FaMobile from 'react-icons/lib/fa/mobile';
import FaEnvelopeO from 'react-icons/lib/fa/envelope-o';
import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter';
import GoogleMapReact from 'google-map-react';
import MapContainer from './MapContainer';
import Footer from './footer';

class Contact extends Component {

  render() {
    return (
        
      <div className="contact">
        <Jumbotron  className="conatct-jumbo img-fluid">
          <h1 className="display-3 contact-title "><span className="contact-black">Contact Me</span></h1>
          <p className="lead">Have  a project idea or just want to chat? Lets have coffee and change the world!</p>
        </Jumbotron>
  
       <div className="contact-info-cont container-fluid">
          <h3 className="display-4 get-intouch text-center"> Get in touch with Me</h3>
          <Row className="contact-row">
            <Col className="text-center" md="4">
            <div className="contact-container">
              <h4><FaHome className="contact-icons"/></h4>
             
              <h4>Georegtown, MA </h4>
              </div>
            </Col>
            <Col className="text-center" md="4">
            <div className="contact-container">
              <h4><FaMobile className="contact-icons"/></h4>
              <h4>978-500-4457</h4>
              </div>
            </Col>
            <Col className="text-center" md="4">
            <div className="contact-container">
             <h4><FaHome className="contact-icons"/></h4>
              <h4>Georegtown, MA </h4>
              </div>
            </Col>
          </Row> 
        </div>

        <Row className="social-contact-row">
          <Col md="6">
            <h3 className=" text-center social-intro-contact">Lets get social</h3>
          </Col>
          <Col className="contact-flex text-center" md="6">
            <Col md="2">
              <a href="https://github.com/bhobbs20"><FaGithubSquare className="social-contact-icon"/></a>
            </Col>
            <Col md="2">
              <a href="https://www.linkedin.com/in/brian-hobbs-181895b5/"><FaLinkedinSquare className="social-contact-icon"/></a>
            </Col>
            <Col md="2">
              <a href="https://twitter.com/brianhobbs216"><FaTwitter className="social-contact-icon"/></a>
            </Col>
          </Col>
        </Row>
      
        <div className="container-fluid map-box">   
          <MapContainer/>
        </div>    
          <Footer/>
      </div> 
    );
  }
}

export default Contact;



