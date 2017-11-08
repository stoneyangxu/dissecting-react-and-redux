import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({ text, completed, onToggle, onRemove }) => (
  <li className="list-group-item">
    <input type="checkbox" checked={completed ? 'checked' : ''} onClick={onToggle}/>
    <span>{text}</span>
    <button className="btn btn-sm btn-light" onClick={onRemove}>x</button>
  </li>
)

export default TodoItem
