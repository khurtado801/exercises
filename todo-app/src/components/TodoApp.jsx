// src/components/TodoApp

import React, { Component } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import TodoSearch from './TodoSearch';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: 1,
                    text: 'Buy beer'
                }, {
                    id: 2,
                    text: 'Buy toilet paper'
                }, {
                    id: 3,
                    text: 'Buy more beer'
                }, {
                    id: 4,
                    text: 'Buy more toilet paper'
                }
            ]
        };
    }
    handleAddTodo = (text) => {
        alert(`new todo: ${text}`);
    }
    handleSearch = (showCompleted, searchText) => {
        this.setState({
            showCompleted,
            searchText: searchText.toLowerCase()
        });
    }

    render () {
        let { todos } = this.state; // Destructure state
        return (
            <div>
                <TodoSearch onSearch={this.handleSearch} />
                <TodoList todos={todos} /> {/* Pass Todo array to TodoList */}
                <AddTodo onAddTodo={this.handleAddTodo} />
            </div>
        );
    }
}

export default TodoApp;
