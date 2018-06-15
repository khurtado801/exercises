import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HerosList';
import '../styles/index.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>SuperSquad</h2>
                <div className="col-md-6">
                    <CharacterList />
                </div>
                <div className="col-md-6">
                    <HeroList />
                </div>
            </div>
        );
    }
}

export default App;

