import React, { Component } from 'react';
import Counter from './Counter';
import Summary from './Summary'

class CounterPanel extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />

        <Summary />
      </div>
    );
  }
}

export default CounterPanel;
