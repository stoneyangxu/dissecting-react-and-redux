import React, { Component } from 'react';
import ClickCounter from './ClickCounter';

class CounterPanel extends Component {

  constructor(props) {
    super(props)
    this.state = { sum: 111 }

    this.onUpdate = this.onUpdate.bind(this);
  }

  onUpdate(previousValue, newValue) {
    if (newValue !== previousValue) {
      this.setState({ sum: this.state.sum + (newValue - previousValue) })
    }
  }

  render() {
    return (
      <div>
        <ClickCounter caption="First" initValue={1} onUpdate={this.onUpdate}/>
        <ClickCounter caption="Second" initValue={10} onUpdate={this.onUpdate}/>
        <ClickCounter caption="Third" initValue={100} onUpdate={this.onUpdate}/>

        <div>
          <span>Sum is : {this.state.sum}</span>
        </div>
      </div>
    );
  }
}

export default CounterPanel;
