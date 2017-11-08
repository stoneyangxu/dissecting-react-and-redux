import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as todoReducer } from './todos'
import { reducer as filterReducer } from './filter'

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer
})

const middlewires = []
if (process.env.NODE_ENV !== 'production') {
  middlewires.push(require('redux-immutable-state-invariant').default())
}

const win = window

const storeEnhancers = compose(
  applyMiddleware(...middlewires),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

export default createStore(reducer, {}, storeEnhancers)
