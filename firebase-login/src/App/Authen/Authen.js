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
            inputs: {
                email: '',
                password: '',
            },
            err: '',
        };
    }
    handleChange = (e) => {
        this.setState({ emailValue: e.target.value });
    }

    login = (event) => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();
        const promise = auth.signInWithEmailAndPassword(email, password);

        promise
        .then(user => {
            // Get logout element
            let err = 'Welcome ' + user.email;
            console.log('Welcome err', err);
            let lout = document.getElementById('logout');
            lout.classList.remove('hide')
            this.setState({ err: err, emailValue: '' });
        });
        

        promise.catch(e => {
            let err = e.message;
            console.log(err);
            this.setState({ err: err })
        });
    }

    signup = () => {
        const email = this.refs.email.value;
        const password = this.refs.password.value;
        console.log(email, password);

        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise
        // 'Then' is for something good
        .then(user => {
            let err = 'Welcome ' + user.email;
            // Make entry for user in database
            firebase.database().ref('users/' + user.uid).set({
                email: user.email
            });
            console.log(user);
            this.setState({ err: err });
        });
        promise
        .catch(e => {
            let err = e.message;
            console.log(err);
            this.setState({ err: err });
        })
    }

    logout = () => {
        firebase.auth().signOut();
        let lout = document.getElementById('logout');
        let err = 'Goodbye!';
        this.setState({ err: err })
        lout.classList.add('hide');
    }

    render() {
        return (
            <div>
                <input id="email" ref="email" type="email" value={this.state.emailValue} onChange={this.handleChange} placeholder="Enter your email" /><br />
                <input id="pass" ref="password" type="password" placeholder="Enter your password" /><br />
                <p>{this.state.err}</p>
                <button onClick={this.login} >Log in</button>
                <button onClick={this.signup} >Sign Up</button>
                <button onClick={this.logout} id="logout" className="hide" onClick={this.logout} >Log Out</button>
            </div>
        );
    }
}

export default Authen;
