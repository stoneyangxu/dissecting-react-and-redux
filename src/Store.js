import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducer as todoReducer } from './todos'
import { reducer as filterReducer } from './filter'
import { reducer as weatherReducer } from './weather'
import thunkMiddleware from 'redux-thunk'

const reducer = combineReducers({
  todos: todoReducer,
  filter: filterReducer,
  weather: weatherReducer
})

const middlewires = [thunkMiddleware]
if (process.env.NODE_ENV !== 'production') {
  middlewires.push(require('redux-immutable-state-invariant').default())
}

const win = window

const storeEnhancers = compose(
  applyMiddleware(...middlewires),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
)

export default createStore(reducer, {}, storeEnhancers)
