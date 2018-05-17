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
              <h4 className="profile-name">Who am I?</h4>
              <p className="text-muted">I'm an ABA Therapist turned Full-Stack Web Developer. I special in rails backend with react frontend. </p>
              
              
              </div>
              <div className="team-member">
              <h4>My services</h4>
              <ListGroup>
              <ListGroupItem>Freelance</ListGroupItem>
              <ListGroupItem>Front-end Development</ListGroupItem>
              <ListGroupItem>Back-end Development</ListGroupItem>
              <ListGroupItem>Mobile</ListGroupItem>
              <ListGroupItem>Wordpress</ListGroupItem>
              <ListGroupItem>Responsive Design</ListGroupItem>
            </ListGroup>
              
              </div>
         
            </Col>
         
          
        

         
            <Col md="8">
        
            <div className="skills">
      <div className="text-center desc-bar">Javascript</div>
      <Progress value="60" />
      <div className="text-center desc-bar">Ruby</div>
      <Progress value="70" />
      <div className="text-center desc-bar">Ruby on Rails</div>
      <Progress value="80" />
      <div className="text-center desc-bar">React</div>
      <Progress value="40" />
      <div className="text-center desc-bar">React Native</div>
      <Progress value="30" />
      <div className="text-center desc-bar">Bootstrap</div>
      <Progress value="65" />
      <div className="text-center desc-bar">HTML5/CSS3/SCSS</div>
      <Progress value="88" />
      <div className="text-center desc-bar">Postgresql</div>
      <Progress value="65" />
      <div className="text-center desc-bar">Coffeescript</div>
      <Progress value="25" />
      <div className="text-center desc-bar">Angular5</div>
      <Progress value="37" />
      
    </div>

   

            </Col>
          
            </Row>
         
          
    

      </div>
    );
  }
}

export default About;