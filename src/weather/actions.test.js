import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'
import {stub} from 'sinon'

import * as actions from './actions'
import * as actionTypes from './actionTypes'

const middlewares = [thunk]
const createMockStore = configureStore(middlewares)

describe('fetchWeather', () => {
  let stubbedFetch;
  const store = createMockStore()

  beforeEach(() => {
    stubbedFetch = stub(global, 'fetch')
  })

  afterEach(() => {
    stubbedFetch.restore()
  })

  it('should dispatch fetchWeatherSuccess action on fetch weather', () => {
    const mockResponse = Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        weatherinfo: {}
      })
    })

    stubbedFetch.returns(mockResponse);

    return store.dispatch(actions.fetchWeather(1)).then(() => {
      const dispatchedActions = store.getActions();
      expect(dispatchedActions.length).toBe(2);
      expect(dispatchedActions[0].type).toBe(actionTypes.FETCH_STARTED);
      expect(dispatchedActions[1].type).toBe(actionTypes.FETCH_SUCCESS);
    });
  });
});
