import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ClickCounter extends Component {

  constructor(props) {
    super(props);

    console.log(`enter constructor ${this.props.caption}`);

    this.state = { count: this.props.initValue || 0 };
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({ count: this.state.count + 1 })
  }

  componentWillMount() {
    console.log(`enter componentWillMount ${this.props.caption}`);
  }

  componentDidMount() {
    console.log(`enter componentDidMount ${this.props.caption}`);
  }

  componentWillReceiveProps(nextProps) {
    console.log(`enter componentWillReceiveProps ${this.props.caption}`);
  }

  render() {

    console.log(`enter render ${this.props.caption}`);

    const { caption } = this.props;

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
