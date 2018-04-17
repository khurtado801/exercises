import React, { Component } from 'react';

import Calculator from './Calculator/Calculator';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="wrapper">
          <div id="app">
            <Calculator />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
