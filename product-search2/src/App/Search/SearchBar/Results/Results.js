import React, { Component } from 'react';

import Result from './Result/Result';
import './Results.css';

class Results extends Component {
    
    componentWillReceiveProps(nextProps) {
        console.log('Results:' + nextProps.query);
        console.log(nextProps.products);
    }

    render () {
        console.log(this.props.products);
        return (
            <div className="results">
                <div className="in-stock">
                    <h2><a href="#!">Toothpaste</a></h2>
                    <p>$2.99</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labor</p>
                </div>
            </div>
        );
    }
}

export default Results;
