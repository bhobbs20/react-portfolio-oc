import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PortItemOne from './portItemOne';
import PortItemTwo from './portItemTwo';
import PortItemThree from './portItemThree';
import '../portfolio-item.css';

import { 
    Col, Row, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

    import WOW from "wowjs";
  


class PortfolioItem extends Component {

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
 
  render() {
    return (
      <div className="portfolio-item">

    
    <Row className="row-items">
    <Col md="4">
      <Card className=" wow slideInRight" data-wow-delay=".1s">
        <CardImg top width="100%" src="./project-one.png" alt="Card image cap" />
      <CardBody>
      <Link to="/portfolio-item-one"> <CardTitle className="text-center">Challets and Caviar</CardTitle></Link>
      
      </CardBody>
      </Card>
      </Col> 

      <Col md="4">
      <Card className=" wow slideInLeft" data-wow-delay=".2s">
        <CardImg top width="100%" src="./festival-home.png" alt="Card image cap" />
        <CardBody>
        <Link to="/portfolio-item-two"><CardTitle className="text-center"> Film Festival</CardTitle></Link>
        
         
         
        </CardBody>
      </Card>
      </Col> 

      <Col md="4">
      <Card className=" wow slideInRight" data-wow-delay=".1s">
        <CardImg top width="100%" src="./react_port.png" alt="Card image cap" />
        <CardBody>
        <Link to="/portfolio-item-three"> <CardTitle className="text-center">  React Portfolio</CardTitle></Link>
          
          
         
         
        </CardBody>
      </Card>
      </Col> 

    </Row>

    <Row>
    <Col md-4>
    <Card className="bottom-card wow slideInLeft" data-wow-delay=".2s">
        <CardImg top width="100%" src="./coming-soon.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center">Coming Soon!</CardTitle>
      
          
        </CardBody>
      </Card>
      </Col> 

      <Col md-4>
      <Card className="bottom-card wow slideInRight" data-wow-delay=".1s">
      <CardImg top width="100%" src="./coming-soon.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-center">Coming Soon!</CardTitle>
         
        </CardBody>
      </Card>
      </Col> 

      <Col md-4>
      <Card className="bottom-card wow slideInLeft" data-wow-delay=".2s">
      <CardImg top width="100%" src="./coming-soon.jpg" alt="Card image cap" />
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