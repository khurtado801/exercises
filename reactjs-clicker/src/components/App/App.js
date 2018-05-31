import React, { Component } from 'react';
import Header from '../Header/Header';
import Clicker from '../Clicker/Clicker';

export default class ClickerApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'React-clicker'
    };
  }

  render() {
    return (
      <div>

        <Header title={this.state.title} />
        <div className="mt-5">
          <Clicker />
        </div>
      </div>
    );
  }
}
