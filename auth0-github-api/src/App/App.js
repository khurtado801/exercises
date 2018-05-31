import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth0Lock from 'auth0-lock';

import logo from './logo.svg';
import './App.css';
import Github from './Github';
import Header from './Components/Header';


class App extends Component {
  static defaultProps = {
    clientID: 'mE97WqEwF1AX6GyVZi2u3GWHGvt43fK7',
    domain: 'mE97WqEwF1AX6GyVZi2u3GWHGvt43fK7'
  }

  constructor(props) {
    super(props);

    this.state = {
      idToken: '',
      profile: {}
    };
  }

  componentWillMount() {
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);
    this.lock.on('authenticated', (authResult) => {
      console.log(authResult);
    });
  }

  showLock = () => {
    this.lock.show();
  }

  render() {
    return (
      <div className="App"> 
        <Header onLogin={ this.showLock } />
        <Github />
      </div>
    );
  }
}

export default App;
