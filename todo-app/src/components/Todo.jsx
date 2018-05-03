// src/components/TodoApp/TodoList/Todo

import React, { Component } from 'react';

class Todo extends Component {
    render () {
        let { id, text } = this.props; // Deconstruct text and id from props
        return (
            <div>
                {id}. {text};
            </div>
        );
    }
}

export default Todo;
