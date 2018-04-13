import React, { Component } from 'react';

import Results from './Results/Results';
import './SearchBar.css';

let product = require('../../products');

console.log(product);

class SearchBar extends Component {
    handleQuery = (e) => {
        this.props.onQuery(e.target.value);
    }

    render () {
        return (
            <div>
                <input onChange={this.handleQuery} placeholder="Search" />
            </div>
        );
    }
}

export default SearchBar;
