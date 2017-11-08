import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions'

class AddTodo extends Component {

  constructor(props) {
    super(props)

    this.refInput = this.refInput.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  refInput(node) {
    this.input = node
  }

  onSubmit(e) {
    e.preventDefault()

    const input = this.input
    if (!input.value.trim()) {
      return
    }

    this.props.onAdd(input.value)
    input.value = ''
  }

  render() {
    return (
      <div className="row">
        <form className="form-inline" onSubmit={this.onSubmit}>
          <input className="col-8 form-control" ref={this.refInput} />
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
