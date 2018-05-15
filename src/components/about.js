import React, { Component } from 'react';
import '../about.css';
import { Row, Col, Progress, ListGroup, ListGroupItem  } from 'reactstrap';

class About extends Component {
 
  render() {
    return (
      <div className="about container ">
      <Row>
        <Col md="12">
          <h2 className="text-center">About</h2>
          
        </Col>
      </Row>

      <Row>
        <Col md="6">
        <h2 className="text-center">Me</h2>
        <p className="text-center">Let me introduce myself</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet risus enim. Fusce eu felis eu metus iaculis aliquam. Vivamus tortor erat, pellentesque vel quam vitae, mollis dignissim quam. Quisque eget ornare elit, vitae fringilla nisi. Aliquam erat volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed ac nisl mi. Sed nisl turpis, blandit ut arcu at, dignissim blandit libero. Morbi rutrum augue eget sagittis rhoncus. Donec nec lacus vitae urna cursus semper et a eros. Curabitur sit amet suscipit tellus, sed faucibus enim. Vivamus vitae hendrerit mi. Nulla imperdiet feugiat efficitur.</p>

        <h2 className="text-center">Services</h2>
        <p className="text-center">How can I help you?</p>
        <ListGroup>
        <ListGroupItem>Web Design</ListGroupItem>
        <ListGroupItem>Front-End Development</ListGroupItem>
        <ListGroupItem>Back-End Development</ListGroupItem>
        <ListGroupItem>Mobile</ListGroupItem>
        <ListGroupItem>Freelancer</ListGroupItem>
      </ListGroup>
        </Col>
        <Col md="6">
        <h2 className="text-center">Skills</h2>
        <p className="text-center">My strengths</p>
          <div className="container skillsBox">
          <div className="text-center">Ruby on Rails</div>
          <Progress value="70" />
          <div className="text-center">React</div>
          <Progress value="50" />
          <div className="text-center">Postgresql</div>
          <Progress value="85" />
          <div className="text-center">Bootstrap</div>
          <Progress value="72" />
          <div className="text-center">CCS3/SCSS</div>
          <Progress value="45" />
          <div className="text-center">Ruby on Rails</div>
          <Progress value="70" />
          
          </div>

        </Col>
      
      </Row>
   

      </div>
    );
  }
}

export default About;