import React, { Component } from 'react';

import Authen from './Authen/Authen';
import logo from '../img/logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </div>
                <Authen />
            </div>
        )
    }
}

export default App