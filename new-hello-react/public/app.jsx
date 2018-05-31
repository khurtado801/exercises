const React = require('react');
const ReactDOM = require('react-dom');
const Greeter = require('Greeter');

var firstName = 'Kenny';

ReactDOM.render(
    <Greeter name={firstName}/>,
    document.getElementById('app')
);
