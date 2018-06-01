import React, { Component } from 'react';
import '../styles/components/about.css';
import { Row, Col, Jumbotron  } from 'reactstrap';
import Footer from './footer';
import WOW from "wowjs";

class About extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
 
  render() {
    return (
      <div className="about">
        <Jumbotron  className="about-jumbo img-fluid">
          <div className="container about-intro-con wow slideInLeft">
            <h1 className="display-3 about-title wow slideInLeft">About Me </h1>
            <p className="about-intro-line wow slideInLeft">A little ditty about me</p>
          </div> 
        </Jumbotron>
        <h3 className="display-4 get-knoiw-me text-center wow bounceInUp"> Get to know me</h3>
        <div className=" container-fluid">
          
          <Row className="about-row">
            <Col md="6">
              <div className="head-box mb-5 pl-5 mt-2" >
                <h2 className="about-lead-title text-white wow slideInLeft">My Story</h2>
                <h6 className="about-lead-sub text-white wow slideInLeft" >Let me explain</h6>
                <div className="about-hr-line  wow slideInLeft" ></div>
                <p className="text-white intro-para wow slideInRight " > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="text-white intro-para wow slideInLeft" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </Col>
            <Col md="6" className="p-0 m-0">
              <img src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg" alt="coffee" className="img-fluid wow slideInRight" data-wow-delay="1s"/>
            </Col>
          </Row>
        </div>
          <h2 className=" text-center text-black services-head ">My Experience & Education</h2>
          <Row className="jobs-row-two text-center row-two-two">
            <Col>
             <a href="https://www.linkedin.com/feed/"> <img className="job-icon wow rollIn jobs" alt="riverside" data-wow-delay="1s" src="/riverside.jpg" /> </a>
              <h3 className="job-place wow bounceIn" data-wow-delay="1.2s">Riverside Community Care</h3>
              <h5 className="job-name space wow bounceIn" data-wow-delay="1.3s">Residential Counslor</h5>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/feed/"> <img className="job-icon wow rollIn" alt="melmark" data-wow-delay=".9s" src="/melmark.jpeg"/> </a>
              <h3 className="job-place wow bounceIn" data-wow-delay="1.4s">Melmark NewEngland</h3>
              <h5 className="job-name space wow bounceIn" data-wow-delay="1.5s">ABA Therapist</h5>
            </Col>
            <Col>
            <a href="https://www.linkedin.com/feed/"> <img className="job-icon wow rollIn" alt="nashoba" data-wow-delay=".6s" src="/nashoba.jpg"/> </a>
              <h3 className="job-place wow bounceIn" data-wow-delay="1.6s">Nashoba Learning Group</h3>
              <h5 className="job-name space wow bounceIn" data-wow-delay="1.7s">ABA Therapist</h5>
            </Col>
            <Col >
            <a href="https://www.linkedin.com/feed/"> <img className="job-icon wow rollIn" alt="lowell" data-wow-delay=".3s" src="/lowell.png"/> </a>
              <h3 className="job-place wow bounceIn" data-wow-delay="1.8s">Univeristy Of MA Lowell</h3>
              <h5 className="job-name wow bounceIn" data-wow-delay="1.9s">B.A. Psychology</h5>
              <h5 className="job-name space wow bounceIn" data-wow-delay="1.9s">B.S. Information Technology</h5>
            </Col>
            <Col >
            <a href="https://www.linkedin.com/feed/"> <img className="job-icon wow rollIn" alt="openclassrooms"  src="/openclass.jpeg"/> </a>
              <h3 className="job-place wow bounceIn" data-wow-delay="2s">Open Classrooms</h3>
              <h5 className="job-name space bottom-space wow bounceIn" data-wow-delay="2.1s">Full-Stack Web Development</h5>
            </Col>   
          </Row>
        <Footer/>
      </div>
    );
  }
}

export default About;