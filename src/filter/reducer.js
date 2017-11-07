import * as ActionTypes from './actionTypes'

export default (state = '', action) => {
  switch (action.type) {
    case ActionTypes.SET_FILTER:
      return action.filter
    default:
      return state
  }
}
