import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increase = (caption) => {
  console.log('dispatch increase')
  AppDispatcher.dispatch({
    type: ActionTypes.INCREASE,
    caption: caption
  })
}

export const decrease = (caption) => {
  AppDispatcher.dispatch({
    type: ActionTypes.DECREASE,
    caption: caption
  })
}

export default {increase, decrease}
