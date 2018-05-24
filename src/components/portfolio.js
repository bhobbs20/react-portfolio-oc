import React, { Component } from 'react';
import { Row, Col, Jumbotron  } from 'reactstrap';
import PortfolioItem from './portfolioItems';
import '../portfolio.css';
import Footer from './footer';

class Portfolio extends Component {
 
  render() {
    return (
      <div>
      <Jumbotron  className="portfolio-jumbo img-fluid">
      <h1 className="display-3 about-title"><span className="contact-black">My Portfolio</span> </h1>
      <p className="text-white lead">Check out my work and drop me a line</p>
      
    </Jumbotron>
    <h2 className="text-center port-title">Check out my work</h2>
      <div className="container-fluid port-items-cont">
       
        <PortfolioItem></PortfolioItem>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default Portfolio;