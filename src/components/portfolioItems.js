import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PortItemOne from './portItemOne';
import PortItemTwo from './portItemTwo';
import PortItemThree from './portItemThree';
import '../portfolio-item.css';

import { 
    Col, Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
  


class PortfolioItem extends Component {
 
  render() {
    return (
      <div className="portfolio-item">

      <h2 className="portfolio-item-title">My Work</h2>
    
    <Row className="row-items">
    <Col md="4">
      <Card>
        <CardImg top width="100%" src="./chalet_one.png" alt="Card image cap" />
      <CardBody>
      <CardTitle className="text-center">Challets and Caviar</CardTitle>
      <Link to="/portfolio-item-one" className="btn btn-outline-warning start-button">More</Link>
      </CardBody>
      </Card>
      </Col> 

      <Col md="4">
      <Card>
        <CardImg top width="100%" src="./filmFestival.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center"> Film Festival</CardTitle>
          <Link to="/portfolio-item-two" className="btn btn-outline-warning start-button">More</Link>
         
         
        </CardBody>
      </Card>
      </Col> 

      <Col md="4">
      <Card>
        <CardImg top width="100%" src="./react_port.png" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center">  React Portfolio</CardTitle>
          <Link to="/portfolio-item-three" className="btn btn-outline-warning start-button">More</Link>
          
         
         
        </CardBody>
      </Card>
      </Col> 

    </Row>

    <Row>
    <Col md-4>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center">Coming Soon!</CardTitle>
      
          
        </CardBody>
      </Card>
      </Col> 

      <Col md-4>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center">Coming Soon!</CardTitle>
         
        </CardBody>
      </Card>
      </Col> 

      <Col md-4>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center">Coming Soon!</CardTitle>
       
        </CardBody>
      </Card>
      </Col> 

    </Row>

    
    <Route path="./portfolio-item-one" component={PortItemOne}/>
    <Route path="./portfolio-item-two" component={PortItemTwo}/>
    <Route path="./portfolio-item-three" component={PortItemThree}/>
      </div>
    );
  }
}

export default PortfolioItem;