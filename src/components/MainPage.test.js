import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage.js';

describe('MainPage Component', () => {
  let wrapper;
  beforeEach(() => {
    const mockProps = {
      onRequestRobots: jest.fn(),
      robots: [],
      searchField: '',
      isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps } />);
  })

  it('expect it to render MainPage', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  it('filters robots correctly', () => {
    expect( wrapper.instance().filteredRobots() ).toEqual( [] )

    const mockProps2 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 1,
        name: 'Bob',
        email: 'bob@bob.net'
      }],
      searchField: 'a',
      isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 } />);
    expect( wrapper2.instance().filteredRobots() ).toEqual( [] )
  })

  it('filters robots correctly 2', () => {
    const mockProps3 = {
      onRequestRobots: jest.fn(),
      robots: [
        {
          id: 1,
          name: 'Bob',
          email: 'bob@bob.net'
        },
        {
          id: 2,
          name: 'Butterworth',
          email: 'col.butterworth@yahoo.com'
        }
      ],
      searchField: 'Bob',
      isPending: false
    }
    const wrapper3 = shallow(<MainPage { ...mockProps3 } />);
    expect( wrapper3.instance().filteredRobots() ).toEqual( [{
      id: 1,
      name: 'Bob',
      email: 'bob@bob.net'
    }] )
  })

  it('renders a header when pending', () => {
    expect( wrapper.instance().filteredRobots() ).toEqual( [] )

    const mockProps4 = {
      onRequestRobots: jest.fn(),
      robots: [{
        id: 1,
        name: 'Bob',
        email: 'bob@bob.net'
      }],
      searchField: 'a',
      isPending: true
    }
    const wrapper4 = shallow(<MainPage { ...mockProps4 } />);
    expect( wrapper4 ).toMatchSnapshot()
  })
})
