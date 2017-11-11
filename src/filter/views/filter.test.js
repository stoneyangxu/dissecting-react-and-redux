import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

import Filter from './filter'
import Link from './link'
import * as FilterTypes from '../filterTypes'

Enzyme.configure({ adapter: new Adapter() });

describe('filter', () => {
  it('should render three link', () => {
    const wrapper = shallow(<Filter />)

    expect(wrapper.contains(<Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>)).toBeTruthy()
    expect(wrapper.contains(<Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>)).toBeTruthy()
    expect(wrapper.contains(<Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>)).toBeTruthy()

  });
});
