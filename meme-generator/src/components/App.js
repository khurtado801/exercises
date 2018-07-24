import React, { Component } from 'react';
import { connect } from 'react-redux';

import MemeItem from './MemeItem';
import '../styles/index.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            memeLimit: 10
        };
    }

    render() {
        return (
            <div>
                <h2><u>Welcome to the Meme Generator!</u></h2>
                <h4><i>Write Some Text</i></h4>
                {
                    this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
                        return (
                            <MemeItem 
                              key={index}
                              meme={meme}
                            />
                        );
                    })
                }
                <div className="meme-button" onClick={() => this.setState({ memeLimit: this.state.memeLimit + 10 })}>Load 10 more...</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, null)(App);
