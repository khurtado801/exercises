// src/components/TodoApp/TodoList

import React, { Component } from 'react';
import Todo from './Todo/index';

class TodoList extends Component {
    render() {
        let { todos } = this.props; // Make new variable that pulls the Todo's prop off of this.props
        let renderTodos = () => {
            return todos.map((todo) => {
                return (
                    <Todo key={todo.id} {...todo} /> // Assign key and use spread to expand todo object
                );
            });
        };

        return (
            
            <div>
                {renderTodos()} {/* Call to renderTodo's function */}
            </div>
        );
    }
}

export default TodoList;

