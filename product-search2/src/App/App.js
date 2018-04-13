import React, { Component } from 'react';

import Search from './Search/Search';

class App extends Component {
  render() {
    return (
      <div>
        <div className="search">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
