import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'reactstrap';
import '../home.css';
import WOW from "wowjs";


var ReactRotatingText = require('react-rotating-text');

class Home extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className='container-fluid hero mask rgba-black-strong'> 
        <div className="container wow bounceInDown text-center hero-container">
          <Row className="intro-row">
            <Col md="12">
              <h2 className="text-center hero-name "><span className="hero-span">Hi I'M</span> Brian Hobbs</h2>
              <p className="text-center text-rotate"><ReactRotatingText className="text-center " items={['Web Developer', 'Mobile', 'Full Stack', 'Responsive Design']} /> </p>
              <Link to="/contact" className="btn btn-outline-primary start-button text-center">Lets get started</Link>
              <Link to="/portfolio" className="btn btn-outline-warning start-button">My Work</Link>
            </Col>

        </Row>
        </div>
       
      </div>
    );
  }
}

export default Home;
