import React, { Component } from 'react';
import '../about.css';
import { Row, Col, Progress, ListGroup, ListGroupItem, Jumbotron  } from 'reactstrap';
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
        <h1 className="display-3 about-title wow slideInLeft"><span className="contact-black">About Me</span> </h1>
        <p className="lead wow slideInLeft">Have  a project idea or just want to chat? Lets have coffee and change the world!</p>
      </Jumbotron>
     
      <div className=" container-fluid">
        <h3 className="display-4 get-knoiw-me text-center wow bounceInUp"> Get to know me</h3>
        <Row className="wierd">
          <Col md="6">
            <div className="head-box mb-5 pl-5 mt-2" >
              <h2 className="about-lead-title text-white wow slideInLeft">My Story</h2>
              <h6 className="about-lead-sub text-white wow slideInLeft" >This is information panel</h6>
              <div className="about-hr-line  wow slideInLeft" ></div>
                <p className="text-white wow slideInRight " > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="text-white wow slideInLeft" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>
          <Col md="6" className="p-0 m-0">
            <img src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg" className="img-fluid wow slideInRight" data-wow-delay="1s"/>
          </Col>
        </Row>
      </div>
      <h2 className=" text-center text-black services-head ">My Experience & Education</h2>
      <Row className="jobs-row-two text-center row-two-two">
     
        <Col>
          <img className="job-icon wow rollIn" data-wow-delay=".4s" src="/riverside.jpg"/>
        </Col>
        <Col >
          <img className="job-icon wow rollIn" data-wow-delay=".3s" src="/melmark.jpeg"/>
        </Col>
        <Col >
          <img className="job-icon wow rollIn" data-wow-delay=".2s" src="/nashoba.jpg"/>
        </Col>
        <Col >
          <img className="job-icon wow rollIn" data-wow-delay=".1s" src="/lowell.png"/>
        </Col>
        <Col >
          <img className="job-icon wow rollIn"  src="/openclass.jpeg"/>
        </Col>   
      </Row>
      
    
      <Footer/>
      </div>
    );
  }
}

export default About;