import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className='container-fluid hero'> 
        <div className="wow bounceInDown">
  
        <h2 className="text-center hero-name ">Hi I'M Brian Hobbs</h2>
        <p className="text-center"><ReactRotatingText className="text-center" items={['Im sexy', 'Im a scholor', 'People like me']} /> </p>
        <Link to="/contact" className="btn btn-outline-primary">Lets get started!</Link>
        <Link to="/portfolio" className="btn btn-outline-warning">My Work!</Link>
        </div>
      </div>
    );
  }
}

export default Home;
