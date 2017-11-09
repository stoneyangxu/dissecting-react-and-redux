import { filterTypes as FilterTypes } from '../filter'
import { createSelector } from 'reselect'

const getFilter = (state) => state.filter
const getTodos = (state) => state.todos

export const filterByCompleteState = createSelector(
  [getFilter, getTodos],
  (filter, todos) => {
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
)
