import React, { Component } from 'react';
import '../about.css';
import { Row, Col, Progress, ListGroup, ListGroupItem, Jumbotron  } from 'reactstrap';
import Footer from './footer';
import DownloadResume from './downloadResume';

class About extends Component {
 
  render() {
    return (
      <div className="about">
      <Jumbotron  className="about-jumbo img-fluid">
      <h1 className="display-3 about-title"><span className="contact-black">About Me</span> </h1>
      <p className="lead">Have  a project idea or just want to chat? Lets have coffee and change the world!</p>
      
    </Jumbotron>
     
    <div className=" container-fluid">
      <h3 className="display-4 get-intouch text-center"> Get to know me</h3>
      <Row className="wierd">
        <Col md="6">
          <div className="head-box mb-5 pl-5 mt-2">
          <h2 className="about-lead-title text-white">My Story</h2>
         <h6 className="about-lead-sub text-white">This is information panel</h6>
         <div className="about-hr-line"></div>
        <p className="text-white ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p className="text-white">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>

        </Col>
        <Col md="6" className="p-0 m-0">
        <img src="https://grafreez.com/wp-content/temp_demos/suffi/img/intro-bg.jpg" className="img-fluid"/>

        </Col>
      
      </Row>
          <DownloadResume/>
    </div>
          
     
        










          <Row>
            <Col md="4">
        

             
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
         
          
    
      <Footer/>
      </div>
    );
  }
}

export default About;