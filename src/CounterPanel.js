import React, { Component } from 'react';
import ClickCounter from './ClickCounter';

class CounterPanel extends Component {
  render() {
    return (
      <div>
        <ClickCounter caption="First" initValue={1}/>
        <ClickCounter caption="Second" initValue={10} />
        <ClickCounter caption="Third" initValue={100} />

        <div>
          <button onClick={() => this.forceUpdate()}>Click</button>
        </div>
      </div>
    );
  }
}

export default CounterPanel;
