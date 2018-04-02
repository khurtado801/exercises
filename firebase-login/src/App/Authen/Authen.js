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
        this.state = {
            err: ''
        };
    }

    login = (event) => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => {
            let err = e.message;
            console.log(err);
            this.setState({ err: err })
        });
    }

    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" placeholder="Enter your email" /><br />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
                <p>{this.state.err}</p>
                <button onClick={this.login} >Log in</button>
                <button>Sign Up</button>
                <button>Log Out</button>
            </div>
        );
    }
}

export default Authen;
