function isPromise(obj) {
  return obj && typeof obj.then === 'function'
}

export default ({dispatch}) => next => action => {

  const {types, promise, ...rest} = action

  if (!isPromise(promise) || !(types && types.length === 3)) {
    return next(action)
  }

  const [PENDING, DONE, FAIL] = types
  dispatch({...rest, type: PENDING})

  return promise.then(
    (result) => dispatch({...rest, result, type: DONE}),
    (error) => dispatch({...rest, error, type: FAIL})
  )
}
