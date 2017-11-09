import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem'
import { bindActionCreators } from 'redux'
import { filterTypes as FilterTypes } from '../../filter'

import {filterByCompleteState} from '../selector'

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="row list-group">
      {
        todos.map(todo => (
          <TodoItem
            id={todo.id}
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
          />
        ))
      }
    </ul>
  )
}

function mapStateToProps(state = [], ownProps) {
  return {
    todos: filterByCompleteState(state)
  }
}

export default connect(mapStateToProps)(TodoList);
