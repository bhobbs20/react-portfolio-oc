import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Mainnav from './components/mainnav';

class App extends Component {


  render() {
    return (
      <div className="App">
     <Mainnav/>

      </div>
    );
  }
}

export default App;
