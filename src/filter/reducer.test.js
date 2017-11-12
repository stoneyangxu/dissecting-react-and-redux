import * as actionTypes from './actionTypes'
import reducer from './reducer'

describe('filter/reducer', () => {
  it('should return filter state with SET_FILTER action', () => {
    const action = {
      type: actionTypes.SET_FILTER,
      filter: 'keyword'
    }

    const newState = reducer({}, action)

    expect(newState).toEqual('keyword')
  });

  it('should return default state with other action', () => {
    const action = {
      type: 'others',
      filter: 'keyword'
    }

    const newState = reducer({}, action)

    expect(newState).toEqual({})

  });
});
