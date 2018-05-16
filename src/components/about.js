import React, { Component } from 'react';
import '../about.css';
import { Row, Col, Progress, ListGroup, ListGroupItem  } from 'reactstrap';

class About extends Component {
 
  render() {
    return (
      <div className="about container ">
     
          <h2 className=" about-title bold ">About</h2>
          <div className="about-line"></div>
          

          <Row>
            <Col md="4">
              <div className="team-member">
                <img src="../pic_of_me.jpg" className="img-responsive img-thumbnail profile-img"></img>
                <h4 className="profile-name">Brian Hobbs</h4>
                <p className="text-muted">Full Stack Developer</p>
 
              </div>
            </Col>
            <Col md="8">
              <div className="team-member-two">
              <h2 className="profile-lead">A little about me<span className="dots">...</span></h2>
              <p className="profile-about">I'm a former ABA Therapist turned Full Stack Web developer</p>
              </div>
            </Col>
          
          </Row>
          
    

      </div>
    );
  }
}

export default About;