import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
import SummaryContainer from './SummaryContainer'

class CounterPanel extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CounterContainer caption="First" />
        <CounterContainer caption="Second" />
        <CounterContainer caption="Third" />

        <SummaryContainer />
      </div>
    );
  }
}

export default CounterPanel;
