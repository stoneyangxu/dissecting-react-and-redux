import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import todosReducer from '../reducer'
import { reducer as filterReducer } from '../../filter'
import { filterTypes as FilterTypes } from '../../filter'
import TodoList from './todoList'
import { addTodo } from '../actions'
import TodoItem from './todoItem'

Enzyme.configure({ adapter: new Adapter() });

describe('todoList', () => {
  it('should add new todo-item on addTodo action', () => {
    const store = createStore(
      combineReducers({
        todos: todosReducer,
        filter: filterReducer
      }), {
        todos: [],
        filter: FilterTypes.ALL
      });
    const subject = (
      <Provider store={store}>
        <TodoList />
      </Provider>
    );
    const wrapper = mount(subject);

    store.dispatch(addTodo('write more test'))

    expect(wrapper.html()).toContain('<span class="text">write more test</span>')
  });
});
