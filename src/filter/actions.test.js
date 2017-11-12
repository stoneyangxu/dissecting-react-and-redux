import * as actionTypes from './actionTypes'
import * as actions from './actions'

describe('filter/actions', () => {
  it('should create filter action with a keyword', () => {
    const keyword = 'searching'
    const action = actions.setFilter(keyword)

    expect(action.type).toBe(actionTypes.SET_FILTER)
    expect(action.filter).toEqual(keyword)
  });
});
