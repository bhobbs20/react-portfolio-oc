import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/footer.css';
import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

import { Button, Row, Col, Nav, NavItem, NavLink } from 'reactstrap';

import FaGithubSquare from 'react-icons/lib/fa/github-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import FaTwitter from 'react-icons/lib/fa/twitter';


class Footer extends Component {
 
  render() {
    return (
      <div>
      <footer className="footer">
        <Row>
          <Col md="4">
            <h4 className="text-center">Brian Hobbs</h4>
            <h5 className="text-center">Full-Stack </h5>
            <p className="text-center">Georgetown, MA</p>
          </Col>
          <Col md="4">
          <h4 className="text-center">Menu</h4>
            <Link to="/" className="footer-links text-center">Home</Link>
            <Link to="/about" className="footer-links text-center">About</Link>
            <Link to="/portfolio" className="footer-links text-center">Portfolio</Link>
            <Link to="/contact" className="footer-links text-center">Contact</Link>
          </Col>
          <Col md="4">
            <h4 className="text-center">Social Media</h4>
            <a href="https://github.com/bhobbs20"><FaGithubSquare className="footer-social-icon"/></a>
            <a href="https://twitter.com/brianhobbs216"><FaTwitter className="footer-social-icon"/></a>
            <a href="https://www.linkedin.com/in/brian-hobbs-181895b5/"><FaLinkedinSquare className="footer-social-icon"/></a>
          </Col>
        </Row>
      </footer>
      </div>
    );
  }
}

export default Footer;