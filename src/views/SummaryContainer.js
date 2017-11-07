import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary'

class SummaryContainer extends Component {

  constructor(props, context) {
    super(props, context)

    this.state = this.getOwnState()

    this.onChange = this.onChange.bind(this)
  }

  getOwnState() {
    const state = this.context.store.getState()
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
    this.context.store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
  }

  render() {
    return (
      <Summary summary={this.state.sum} />
    );
  }
}

SummaryContainer.contextTypes = {
  store: PropTypes.object
}

export default SummaryContainer;
