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
         studentName: '',
         answers: {
             answer1: '',
             answer2: '',
             answer3: ''
         },
         isSubmitted: false
      };
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
                <form>
                    <input type="text" placeholder="Enter your name" ref="name" />
                </form>
             </div>)
        }

        return (
            <div>
                { studentName }
                -------------------------------------
            </div>
        )
    }
}

export default Usurvey