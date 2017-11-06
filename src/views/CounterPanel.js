import React, { Component } from 'react';
import ClickCounter from './ClickCounter';
import Summary from './Summary'

class CounterPanel extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ClickCounter caption="First" />
        <ClickCounter caption="Second" />
        <ClickCounter caption="Third" />

        <Summary />
      </div>
    );
  }
}

export default CounterPanel;
