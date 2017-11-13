import React from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group'

import TodoItem from './todoItem'
import { bindActionCreators } from 'redux'
import { filterTypes as FilterTypes } from '../../filter'

import { filterByCompleteState } from '../selector'

import './todoList.css'

const TodoList = ({ todos, onToggle, onRemove }) => {
  return (
    <ul className="row list-group">
      <TransitionGroup transitionName="fade" transitionEnterTimeout={500}
        transitionLeaveTimeout={200} >

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
      </TransitionGroup>
    </ul>
  )
}

function mapStateToProps(state = [], ownProps) {
  return {
    todos: filterByCompleteState(state)
  }
}

export default connect(mapStateToProps)(TodoList);
