import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/HomePage'

class App extends Component {
  render() {
    return (
        <div>
            <HomePage
            logo={logo}
            />

        </div>
    );
  }
}

export default App;
