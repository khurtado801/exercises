import React, { Component } from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            title: 'React Movie Cards'
        };
    }

    render() {
        return (
            <div>
                <div className="mt-5">
                    I'm from App
                </div>
            </div>
        );
    }
}

