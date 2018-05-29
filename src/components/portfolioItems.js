import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import '../portfolio-item.css';
import FaGithubSquare from 'react-icons/lib/fa/github-square';

import WOW from "wowjs";


class PortfolioItem extends Component {
  constructor(){
    super();
    this.state = {
        isHovered : false
    }
  }

  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render(){
    const  { techUsed, name, link,  img,  description } = this.props.project;
    
    return(
      <div>


      <div className="container">
      <Row className="projects-row">
              <Col md="6" className="text-center wow slideInLeft" data-wow-delay=".2s">
              
                <img className="media" src={img} alt={name} />
              
              </Col>
              <Col md="6" className="project-description wow slideInUp " data-wow-delay=".2s">
              
                <h3 className="text-center project-title">{name}</h3>
                <p className=" description-lead">{description}</p>
                  <p className=" tech description-lead"> <span className="tech-used">{techUsed}</span></p>
                  <a href={link} className="job-icon-portfolio" ><FaGithubSquare className="description-lead "/></a>
            </Col>

            <hr className="port-projects"/>
      </Row>
      
      </div>
    
      </div>
     
      );
    }
  } 

  export default PortfolioItem;