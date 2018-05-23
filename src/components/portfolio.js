import React, { Component } from 'react';
import PortfolioItem from './portfolioItems';
import '../portfolio.css';
import Footer from './footer';

class Portfolio extends Component {
 
  render() {
    return (
      <div>
      <div className="container">
        <h2 className="text-center port-title">Portfolio Page</h2>
        <PortfolioItem></PortfolioItem>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default Portfolio;