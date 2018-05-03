// src/components/TodoApp

import React, { Component } from 'react';
import TodoList from './TodoList/index';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Buy beer'
                }, {
                    id: 2,
                    text: 'Buy toilet paper'
                }
            ]
        };
    }

    render () {
        let { todos } = this.state; // Destructure state
        console.log(todos);
        return (
            <div>
                <TodoList todos={todos} /> {/* Pass Todo array to TodoList */}
            </div>
        );
    }
}

export default TodoApp;
