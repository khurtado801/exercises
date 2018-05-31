import React, { Component } from 'react';
import logo from '../img/logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerText: 'Welcome to Reac!',
      contentText: 'In this lecture we will go over the Component!'
    }
  }

  render() {
    return (
      <div className="App">
        {
          /*
          <h1>{this.state.headerText}</h1>
          <h2>{this.state.contentText}</h2>
          */
        }
        <Header header={this.state.headerText}/>
        <Content />
        {this.props.header}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </div>
    );
  }
}

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: 'Foo',
          age: '38'
        },
        {
          id: 2,
          name: 'FooBar',
          age: '39'
        },
        {
          id: 3,
          name: 'FooBarRek',
          age: '40'
        }
      ]
    }
  }
  render() {
    let person = '';
    return (
      <div>
        <p className="App-intro">
            <h1>What is a Component</h1>
            <p>In this lecture, we will cover the Component</p>
        </p>
        <table>
          <thead>
            <th>
              <td>Id</td>
              <td>Name</td>
              <td>Age</td>
            </th>
          </thead>
          <tbody>
            {this.state.data.map((person, i) => <TableRow key={i} data={person} />)}
          </tbody>
        </table>
      </div>      
    );
  }
}


class TableRow extends Component {
  render() {
    return (
      <div>
        <tr>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.name}</td>
          <td>{this.props.data.age}</td>
        </tr>
      </div>
    );
  }
}


export default App;

