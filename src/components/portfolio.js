import React, { Component } from 'react';
import { Row, Col, Jumbotron  } from 'reactstrap';
import PortfolioItem from './portfolioItems';
import '../portfolio.css';
import Footer from './footer';
import WOW from "wowjs";

class Portfolio extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
 
 
  render() {
    return (
      <div>
      <Jumbotron  className="portfolio-jumbo img-fluid">
      <div className="container about-intro-con wow slideInLeft">
      <h1 className="display-3 about-title wow slideInLeft">My Portfolio</h1>
      <p className="about-intro-line wow slideInLeft">Some of my latest work</p>
     </div> 
    </Jumbotron>
    <h3 className="display-4 get-intouch text-center wow bounceInUp">Check out my work</h3>
      <div className="container-fluid port-items-cont">
       
        <PortfolioItem></PortfolioItem>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default Portfolio;