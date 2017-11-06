import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Actions from '../Actions'
import CounterStore from '../stores/CounterStore'


class ClickCounter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }

    this.onChange = this.onChange.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    Actions.increase(this.props.caption)
  }

  decrease() {
    Actions.decrease(this.props.caption)
  }

  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption];
    this.setState({count: newCount});
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  render() {
    const { caption } = this.props;
    return (
      <div>
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease}>-</button>
        <div>
          {caption} Count: {this.state.count}
        </div>
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
