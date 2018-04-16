import React, { Component } from 'react';
import axios from 'axios';

import './Apicall.css';

class Apicall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            subr: 'space'
        };
    }

    componentWillMount() {
        this.getReddit();
    }

    getReddit = () => {
        axios.get(`https://www.reddit.com/r/${this.state.subr}.json`)
        .then(res => {
            const posts = res.data.data.children.map(obj => obj.data);
            this.setState({ posts });
        });
    }

    render () {
        return (
            <div>
               <div className="main-text">
                    <h1>{`/r/${this.state.subr}`}</h1>
                    <ul>
                        {this.state.posts.map(post =>
                            <li key={post.id}>{post.title}</li>)}
                    </ul>
               </div>
            </div>
        );
    }
}

export default Apicall;
