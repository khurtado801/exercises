import React, { Component } from 'react'

let firebase = require('firebase');
let uuid = require('uuid');

let config = {
    apiKey: 'AIzaSyCTATjM5_8JmD5_GbxTyjL_2b7ttbFy_0A',
    authDomain: 'usurvey801.firebaseapp.com',
    databaseURL: 'https://usurvey801.firebaseio.com',
    projectId: 'usurvey801',
    storageBucket: 'usurvey801.appspot.com',
    messagingSenderId: '886483618315'
  };
  firebase.initializeApp(config);

class Usurvey extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         uid: uuid.v1(),
         studentName: 'Dude',
         answers: {
             answer1: '',
             answer2: '',
             answer3: ''
         },
         isSubmitted: false
      };
    }

    nameSubmit = (event) => {
        let studentName = this.refs.name.value;
        this.setState({ studentName: studentName }, function () {
            console.log('this.state', this.state);
        })
    }
    
    render () {
        let studentName;
        let questions;
        // Check if we are in the default state studentName and isSubmitted are empty and false
        // If so, propmt questions
        if (this.state.studentName === '' && this.state.isSubmitted === false) {
            studentName = 
            (<div>
                <h1>Hello, what's your name? </h1>
                <form onSubmit={this.nameSubmit} >
                    <input type="text" placeholder="Enter your name" ref="name" />
                </form>
             </div>);
             questions = ''
        } else if (this.state.studentName !== '' && this.state.isSubmitted === false) {
            studentName = <h1>Welcome to U-Survey, { this.state.studentName } </h1>;
                questions = <p>Question goes here</p>;
        }

        return (
            <div>
                { studentName }
                -------------------------------------
                { questions }
            </div>
        )
    }
}

export default Usurvey