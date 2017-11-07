import React from 'react';
import { connect } from 'react-redux';
import Actions from '../Actions'

function Counter({ onIncrease, onDecrease, caption, value }) {
  return (
    <div>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <span>{caption} Count: {value}</span>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    caption: ownProps.caption,
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrease: () => {
      dispatch(Actions.increase(ownProps.caption))
    },
    onDecrease: () => {
      dispatch(Actions.decrease(ownProps.caption))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
