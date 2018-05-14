import React, { Component } from 'react';
import PortfolioItem from './portfolioItems';
import '../portfolio.css';

class Portfolio extends Component {
 
  render() {
    return (
      <div className="container">
        <h2 className="text-center port-title">Portfolio Page</h2>
        <PortfolioItem></PortfolioItem>
      </div>
    );
  }
}

export default Portfolio;