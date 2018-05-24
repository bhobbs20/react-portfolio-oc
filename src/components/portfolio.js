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
      <h1 className=" about-title display-3 contact-black wow slideInLeft ">My Portfolio</h1>
      <p className="text-white lead wow slideInLeft wow slideInLeft ">Check out my work and drop me a line</p>
      
    </Jumbotron>
    <h2 className="text-center port-title wow bounceInUp">Check out my work</h2>
      <div className="container-fluid port-items-cont">
       
        <PortfolioItem></PortfolioItem>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default Portfolio;