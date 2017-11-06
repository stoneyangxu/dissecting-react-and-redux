import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from '../Actions'
import store from '../Store'


class ClickCounter extends Component {

  constructor(props) {
    super(props);

    this.state = this.getOwnState()

    this.onChange = this.onChange.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  getOwnState() {
    return {
      value: store.getState()[this.props.caption]
    }
  }

  increase() {
    store.dispatch(Actions.increase(this.props.caption))
  }

  decrease() {
    store.dispatch(Actions.decrease(this.props.caption))
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <span>{caption} Count: {this.state.value}</span>
      </div>
    );
  }
}

ClickCounter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
}

ClickCounter.defaultProps = {
  initValue: 0,
  onUpdate: f => f // 默认是一个什么都不做的函数
}

export default ClickCounter;
