import reducer from './reducer'
import * as actionTypes from './actionTypes'

describe('todos/reducer', () => {
  it('should add new todo with ADD_TODO type', () => {
    const state = []
    const action = {
      id: 1,
      type: actionTypes.ADD_TODO,
      text: 'new todo',
    }

    const newState = reducer(state, action)

    expect(newState.length).toBe(1)

    const todo = newState[0]
    expect(todo.id).toEqual(1)
    expect(todo.text).toEqual('new todo')
    expect(todo.completed).toBeFalsy()
  });

  it('should toggle todo with TOGGLE_TODO type and id', () => {
    const state = [
      {
        id: 1,
        text: 'todo1',
        completed: false
      },
      {
        id: 2,
        text: 'todo2',
        completed: true
      }
    ]

    let newState = reducer(state, {
      id: 1,
      type: actionTypes.TOGGLE_TODO
    })

    expect(newState[0].completed).toBeTruthy()
    expect(newState[1].completed).toBeTruthy()

    newState = reducer(newState, {
      id: 2,
      type: actionTypes.TOGGLE_TODO
    })

    expect(newState[0].completed).toBeTruthy()
    expect(newState[1].completed).toBeFalsy()
  });

  it('should remove todo with REMOVE_TODO type and id', () => {
    const state = [
      {
        id: 1,
        text: 'todo1',
        completed: false
      },
      {
        id: 2,
        text: 'todo2',
        completed: true
      }
    ]

    const newState = reducer(state, {
      id: 1,
      type: actionTypes.REMOVE_TODO
    })

    expect(newState.length).toBe(1)

    expect(newState[0].id).toBe(2)
  });


  it('should keep current state with other type', () => {
    const state = [
      {
        id: 1,
        text: 'todo1',
        completed: false
      }
    ]

    const newState = reducer(state, {
      id: 1,
      type: 'other'
    })

    expect(newState).toEqual(state)
  });
});
