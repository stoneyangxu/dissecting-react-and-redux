import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from '../Actions'
import store from '../Store'
import Counter from './Counter'


class CounterContainer extends Component {

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
      <Counter caption={caption}
        onIncrease={this.increase}
        onDecrease={this.decrease}
        value={this.state.value} />
    );
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
}

CounterContainer.defaultProps = {
  initValue: 0,
  onUpdate: f => f // 默认是一个什么都不做的函数
}

export default CounterContainer;
