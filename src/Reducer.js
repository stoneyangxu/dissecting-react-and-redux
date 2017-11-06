import * as ActionTypes from './ActionTypes'

export default (state, action) => {
  const { caption } = action

  switch (action.type) {
    case ActionTypes.INCREASE:
      return { ...state, [caption]: state[caption] + 1 }
    case ActionTypes.DECREASE:
      return { ...state, [caption]: state[caption] - 1 }
    default:
      return state
  }
}
