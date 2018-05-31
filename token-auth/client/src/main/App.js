import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './NavBar';

import Signup from './Signup/index';
import Login from './Login/index';
import TodoList from './Todos';

function App() {
    return (
        <div className="app-wrapper">
            <Navbar />
            <Switch>
                <Route exact path="/" component={Signup} />
                <Route path="/login" component={Login} />
                <Route path="/todos" component={TodoList} />
                <Route path="/profile" />
            </Switch>
        </div>
    );
}

export default App;
