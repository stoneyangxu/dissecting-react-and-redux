import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ClickCounter extends Component {

  constructor(props) {
    super(props);

    this.state = { count: this.props.initValue || 0 };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({ count: this.state.count + 1 })
  }

  render() {

    const {caption} = this.props;

    return (
      <div>
        <button onClick={this.onClickButton}>Click Me</button>
        <div>
          {caption} Count: {this.state.count}
        </div>
      </div>
    );
  }
}

ClickCounter.propTypes = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
}

ClickCounter.defaultProps = {
  initValue: 0
}

export default ClickCounter;
