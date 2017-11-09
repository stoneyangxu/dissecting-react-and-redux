import React, { Component } from 'react';

class CountDown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      count: this.props.count
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {

      const newCount = this.state.count - 1

      if (newCount >= 0) {
        this.setState({
          count: this.state.count - 1
        })
      } else {
        clearInterval(this.timer)
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return this.props.children(this.state.count);
  }
}

export default CountDown;
