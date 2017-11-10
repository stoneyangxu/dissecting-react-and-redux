import React, { Component } from 'react';

import { Todos } from './todos';
import { Filter } from './filter';
import CountDown from './CountDown'
import Weather from './Weather'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Todos />
        <Filter />

        <CountDown count={10}>
          {(count) => <div>{count}</div>}
        </CountDown>

        <Weather />
      </div>
    );
  }
}

export default App;
