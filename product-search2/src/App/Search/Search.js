import React, { Component } from 'react';

import SearchBar from './SearchBar/SearchBar';
import Results from './SearchBar/Results/Results';

let product = require('../products');

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    handleQuery = (query) => {
        this.setState({
            query: query.toLowerCase().trim()
        });
    }

    render () {
        return (
            <div>
                <div className="search">
                    <SearchBar onQuery={this.handleQuery} />
                    <Results />
                </div>
            </div>
        );
    }
}

export default Search;
