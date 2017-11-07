import * as ActionTypes from './actionTypes'

let nextTodoId = 0

export const addTodo = (text) => ({
  type: ActionTypes.ADD_TODO,
  id: nextTodoId++,
  text,
  completed: false
})

export const toggleTodo = (id) => ({
  type: ActionTypes.TOGGLE_TODO,
  id
})

export const removeTodo = (id) => ({
  type: ActionTypes.REMOVE_TODO,
  id
})
