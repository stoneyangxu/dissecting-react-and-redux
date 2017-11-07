import React, { Component } from 'react';
import store from '../Store'
import Summary from './Summary'

class SummaryContainer extends Component {

  constructor(props) {
    super(props)

    this.state = this.getOwnState()

    this.onChange = this.onChange.bind(this)
  }

  getOwnState() {
    const state = store.getState()
    let sum = 0;

    for (let key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }

    return {sum}
  }

  onChange() {
    this.setState(this.getOwnState())
  }

  componentDidMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  render() {
    return (
      <Summary summary={this.state.sum} />
    );
  }
}

export default SummaryContainer;
