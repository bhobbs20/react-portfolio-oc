import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../mainnav.css';

import Home from './home';
import About from './about';
import Portfolio from './portfolio';
import Contact from './contact';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

   class Mainnav extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
 
    render() {
      return (
        <div>
        <Navbar expand="md">
        <NavbarBrand href="/">Brian Hobbs</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
          </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
  
      <Route path="/" exact component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/contact" component={Contact}/>
        </div>
      );
    }
  }
  
  export default Mainnav;