import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class AddTodo extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onInputChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const value = this.state.value
    if (!value.trim()) {
      return
    }

    this.props.onAdd(value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className="row">
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input className="col-8 form-control" value={this.state.value} onChange={this.onInputChange} />
          <button className="col-3 btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo);
