import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';

const ReactCalendar = () => (
    <div>
        <span><i className="fab fa-react" /></span>
        <span>React Calendar</span>
        <span><i className="fab fa-react" /></span>
        <App />
    </div>
);

const ROOT_NODE = document.getElementById('root');
ReactDOM.render(<ReactCalendar />, ROOT_NODE);
