import React from 'react';
import { connect } from 'react-redux';
import TodoItem from './todoItem'
import { toggleTodo, removeTodo } from '../actions'
import { bindActionCreators } from 'redux'
import { filterTypes as FilterTypes } from '../../filter'

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="row list-group">
      {
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            onToggle={() => onToggle(todo.id)}
            onRemove={() => onRemove(todo.id)}
          />
        ))
      }
    </ul>
  )
}

function filterByCompleteState(todos, filter) {
  switch (filter) {
    case FilterTypes.ALL:
      return todos;
    case FilterTypes.COMPLETED:
      return todos.filter(todo => todo.completed)
    case FilterTypes.UNCOMPLETED:
      return todos.filter(todo => !todo.completed)
    default:
      return todos;
  }
}

function mapStateToProps(state = [], ownProps) {
  return {
    todos: filterByCompleteState(state.todos, state.filter)
  }
}

const mapDispatchToProps = {
  onToggle: toggleTodo,
  onRemove: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
