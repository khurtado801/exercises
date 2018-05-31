import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const WeatherApp = () => (
    <div>
        <span><i className="fab fa-react"></i></span>
        <span>Weather App</span>
        <span><i className="fab fa-react"></i></span>
    </div>
);

const ROOT_NODE = document.getElementById('root');
ReactDOM.render(<WeatherApp />, ROOT_NODE);

