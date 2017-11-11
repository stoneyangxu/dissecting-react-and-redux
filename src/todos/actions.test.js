import { addTodo, toggleTodo, removeTodo } from './actions'
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

describe('todos/addTodo', () => {
  it('should create an action to add todo', () => {
    const text = 'first todo'
    const action = addTodo(text)

    expect(action.text).toBe(text)
    expect(action.completed).toBe(false)
    expect(action.type).toBe(ADD_TODO)
  });

  it('should create an action with a new todo', () => {
    const first = addTodo('first')
    const second = addTodo('second')

    expect(second.id - first.id).toBe(1)
  });
});

describe('todos/toggleTodo', () => {
  it('should create an action to toggle todo', () => {
    const id = 1
    const action = toggleTodo(id)

    expect(action.id).toBe(id)
    expect(action.type).toBe(TOGGLE_TODO)
  });
});

describe('todos/removeTodo', () => {
  it('should create an action to remove todo', () => {
    const id = 1
    const action = removeTodo(id)

    expect(action.id).toBe(id)
    expect(action.type).toBe(REMOVE_TODO)
  });
});
