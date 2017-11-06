import React, { Component } from 'react';
import SummaryStore from '../stores/SummaryStore'

class Summary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      summary: SummaryStore.getSummary()
    }

    this.onChange = this.onChange.bind(this)
  }

  onChange() {
    const summary = SummaryStore.getSummary()
    this.setState({
      summary
    })
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    SummaryStore.removeChangeListener(this.onChange)
  }

  render() {
    return (
      <div>
        Summary is : {this.state.summary}
      </div>
    );
  }
}

export default Summary;
