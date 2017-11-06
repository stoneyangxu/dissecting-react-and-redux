import * as ActionTypes from './ActionTypes';
import AppDispatcher from './AppDispatcher';

export const increase = (caption) => {
  return {
    type: ActionTypes.INCREASE,
    caption
  }
}

export const decrease = (caption) => {
  return {
    type: ActionTypes.DECREASE,
    caption
  }
}

export default {increase, decrease}
