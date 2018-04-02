import React, { Component } from 'react';

let firebase = require('firebase');

let config = {
    apiKey: 'AIzaSyCTATjM5_8JmD5_GbxTyjL_2b7ttbFy_0A',
    authDomain: 'usurvey801.firebaseapp.com',
    databaseURL: 'https://usurvey801.firebaseio.com',
    projectId: 'usurvey801',
    storageBucket: 'usurvey801.appspot.com',
    messagingSenderId: '886483618315'
  };
  firebase.initializeApp(config);

class Authen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
                <input id="pass" ref="email" type="password" placeholder="Enter your password" /><br />
            </div>
        );
    }
}

export default Authen;
