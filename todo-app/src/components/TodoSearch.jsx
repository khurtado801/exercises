//src/components/TodoSearch
import React, { Component } from 'react';

class TodoSearch extends Component {
    handleSearch = () => {
        let searchText = this.refs.searchText.value;
        let showCompleted = this.refs.showCompleted.checked; // Pull checked box
        this.props.onSearch(showCompleted, searchText);
    }
    render () {
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch} />
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch} />
                        Show completed todos
                    </label>
                </div>
            </div>
        );
    }
}

export default TodoSearch;
