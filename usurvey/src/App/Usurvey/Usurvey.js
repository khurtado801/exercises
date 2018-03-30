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
            studentName: 'The Dude',
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

        if (this.studentName === '') {
            return (
                <div><h1>Please enter your name: </h1>
                    <form onSubmit={this.nameSubmit} >
                        <input type="text" placeholder="Enter your name" ref="name" />
                    </form>
                </div>
            )
        }
        return (
            this.setState({ studentName }, function () {
                console.log('this.state', this.state);
            })
        )
    }

    answerSelected = (event) => {
        let answers = this.state.answers;
        if (event.target.name === 'answer1') {
            answers.answer1 = event.target.value;
        } else if (event.target.name === 'answer2') {
            answers.answer2 = event.target.value;
        } else if (event.target.name === 'answer3') {
            answers.answer3 = event.target.value;
        }

        this.setState({ answers: answers }, function() {
            console.log('this.state', this.state)
        })
    }

    questionSubmit = () => {
        // TODO: work on this
    }

    render() {
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
            studentName = <h1>Welcome to U-Survey, {this.state.studentName} </h1>;
            questions = (<div>
                            <h2>Here are some questions: </h2>
                            <form onSubmit={this.questionSubmit}>
                                <div className="card">
                                    <label>What kind of courses do you like: </label> <br />
                                    <input type="radio" name="answer1" value="Technology" onChange={this.answerSelected} />Technology
                                                <input type="radio" name="answer1" value="Design" onChange={this.answerSelected} />Design
                                                <input type="radio" name="answer1" value="Marketing" onChange={this.answerSelected} />Markting
                                </div>
                                <div className="card">
                                    <label>Which option best describes you: </label> <br />
                                    <input type="radio" name="answer2" value="Student" onChange={this.answerSelected} />Student
                                                <input type="radio" name="answer2" value="Employed" onChange={this.answerSelected} />Employed
                                                <input type="radio" name="answer2" value="Unemployed" onChange={this.answerSelected} />Unemployed
                                </div>
                                <div className="card">
                                    <label>Is online learning helpful: </label> <br />
                                    <input type="radio" name="answer3" value="Yes" onChange={this.answerSelected} />yes
                                                <input type="radio" name="answer3" value="No" onChange={this.answerSelected} />No
                                                <input type="radio" name="answer3" value="Maybe" onChange={this.answerSelected} />Maybe
                                </div>
                                <input className="feedback-button" type="submit" value="submit" />
                            </form>
                         </div>)
        } else if (this.state.isSubmitted === true && this.state.studentName !== '') {
            studentName = <h1>Thanks, { this.state.studentName }</h1>
        }

        return (
            <div>
                {studentName}
                -------------------------------------
                {questions}
            </div>
        )
    }
}

export default Usurvey