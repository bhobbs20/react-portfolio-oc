import React, { Component } from 'react';

import '../home.css';
// import ReactTextRotator from 'react-text-rotator';
import WOW from "wowjs";



var ReactRotatingText = require('react-rotating-text');


class Home extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }


  render() {
    return (
      <div className='wow bounceInDown'>
  
        <h2 className="text-center hero-name ">Brian Hobbs</h2>
        <p className="text-center"><ReactRotatingText className="text-center" items={['Im sexy', 'Im a scholor', 'People like me']} /> </p>
        <h3 className="text-center">Full Stack Developer</h3>



      </div>
    );
  }
}

export default Home;
