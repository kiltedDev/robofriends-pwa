import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card.js';

it('shows a card component', () => {
  expect( shallow(<Card />) ).toMatchSnapshot();
});
