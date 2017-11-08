import React from 'react';
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions'

const TodoItem = ({ text, completed, onToggle, onRemove }) => (
  <li className="list-group-item">
    <input type="checkbox" checked={completed ? 'checked' : ''} onClick={onToggle} />
    <span>{text}</span>
    <button className="btn btn-sm btn-light" onClick={onRemove}>x</button>
  </li>
);

const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps
  return {
    onToggle: () => dispatch(toggleTodo(id)),
    onRemove: () => dispatch(removeTodo(id))
  }
}

export default connect(null, mapDispatchToProps)(TodoItem)
