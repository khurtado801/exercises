import React, { Component } from 'react';
import * as firebase from 'firebase';
import Posts from '../Posts/Posts'

import config from './firebase-config';

class App extends Component {
  constructor() {
    super();
    // Initialize Firebase
    firebase.initializeApp(config);
  }

  state = {
    posts: [],
    loading: true
  }

  componentWillMount() {
    let postsRef = firebase.database().ref('posts');
    let _this = this;
    postsRef.on('value', function(snapshot) {
      console.log(snapshot.val());
      
      _this.setState({
        posts: snapshot.val(),
        loading: false
      });
    });
  }

  render() {
    let { posts } = this.state.posts;
    console.log('Posts', this.state.posts);
    return (
      <div className="App">
        {this.props.children && React.cloneElement (this.props.children, {
            firebase: firebase.database(),
            posts: this.state.posts,
            loading: this.state.loading
        })}
        <Posts>From Posts: { posts }</Posts>
      </div>
    );
  }
}

export default App;
