import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions'

const Link = ({ active, children, onClick }) => {
  if (active) {
    return <b>{children}</b>
  } else {
    return <a href="#" className="badge badge-primary" onClick={(e) => {
      e.preventDefault()
      onClick()
    }}>{children}</a>
  }
};

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter === ownProps.filter
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Link);
