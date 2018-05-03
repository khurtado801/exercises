// src/components/TodoApp/TodoList/Todo

import React, { Component } from 'react';

class Todo extends Component {
    render () {
        let { text } = this.props; // Deconstruct props to text
        return (
            <div>
                {text};
            </div>
        );
    }
}

export default Todo;
