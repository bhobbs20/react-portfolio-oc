import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './components/home';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
   } from 'reactstrap';

class App extends Component {
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
      <div className="App">
      <Navbar color="light" light expand="md">
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

export default App;
