//src/components/AddTodo
import React, { Component } from 'react';

class AddTodo extends Component {
    handleSubmit = (e) => {
        e.preventDefault(); // Prevent page from reloading, this is Reacts job
        let todoText = this.refs.todoText.value;

        if (todoText.length > 0) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    }
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="todoText" placeholder="What to you need to do?" />
                    <button className="button expanded" >Add Todo</button>
                </form>
            </div>
        );
    }
}

export default AddTodo;
