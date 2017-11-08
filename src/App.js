import React, { Component } from 'react';

import { Todos } from './todos';
import { Filter } from './filter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Todos />
        <Filter />
      </div>
    );
  }
}

export default App;
