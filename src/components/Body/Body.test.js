import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('Body', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<Body />);
    expect(wrapper).toMatchSnapshot();
  });
});
