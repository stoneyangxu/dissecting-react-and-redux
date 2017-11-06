import React, { Component } from 'react';
import store from '../Store'

class Summary extends Component {

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
      <div>
        Summary is : {this.state.sum}
      </div>
    );
  }
}

export default Summary;
