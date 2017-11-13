import React, { Component } from 'react';

import { Todos } from './todos';
import { Filter } from './filter';
import CountDown from './CountDown'
import { Weather } from './weather'

import { Motion, spring } from 'react-motion'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Todos />
        <Filter />

        <CountDown count={10}>
          {(count) => <div>{count}</div>}
        </CountDown>

        <Motion defaultStyle={{ x: 100 }}
          style={
            { x: spring(0, { stiffness: 100, damping: 100 }) }
          }
        >
          {value => <div>{Math.ceil(value.x)}</div>}
        </Motion>

        <Weather />
      </div>
    );
  }
}

export default App;
