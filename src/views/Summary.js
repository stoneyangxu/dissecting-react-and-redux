import React from 'react';
import { connect } from 'react-redux';

function Summary({summary}) {
  return (
    <div>
      Summary is : {summary}
    </div>
  );
}

function summary(state) {
  let sum = 0;

  for (let key of Object.keys(state)) {
    sum += state[key]
  }

  return sum
}

function mapStateToProps(state, ownProps) {
  return {
    summary: summary(state)
  }
}

export default connect(mapStateToProps)(Summary);
