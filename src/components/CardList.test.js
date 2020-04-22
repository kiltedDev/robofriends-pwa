import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList.js';

it('shows a card list component', () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Bob Johansson',
      username: 'TheBob',
      email: 'bob@bob.net'
    }
  ]
  expect( shallow(<CardList robots={ mockRobots }/>) ).toMatchSnapshot();
});
