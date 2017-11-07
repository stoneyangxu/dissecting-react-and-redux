import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from '../Actions'
import Counter from './Counter'


class CounterContainer extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = this.getOwnState()

    this.onChange = this.onChange.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  getOwnState() {
    return {
      value: this.context.store.getState()[this.props.caption]
    }
  }

  increase() {
    this.context.store.dispatch(Actions.increase(this.props.caption))
  }

  decrease() {
    this.context.store.dispatch(Actions.decrease(this.props.caption))
  }

  onChange() {
    this.setState(this.getOwnState());
  }

  componentDidMount() {
    this.context.store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    this.context.store.unsubscribe(this.onChange)
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

CounterContainer.contextTypes = {
  store: PropTypes.object
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func,
}

CounterContainer.defaultProps = {
  initValue: 0,
  onUpdate: f => f // 默认是一个什么都不做的函数
}

export default CounterContainer;
