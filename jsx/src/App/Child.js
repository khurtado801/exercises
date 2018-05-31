import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <div>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </div>
                <p className="App-intro">
                    <h1>What is a Component</h1>
                    <p>In this lecture, we will cover the Component</p>
                </p>
            </div>
        )
    }
}
