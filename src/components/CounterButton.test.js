import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton.js';

it('shows a counter button component', () => {
  expect( shallow(<CounterButton />) ).toMatchSnapshot();
});
