import { shallow } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton.js';

describe('CounterButton', () => {
  const mockColor = 'red';

  it('shows a counter button component', () => {
    expect( shallow(<CounterButton color={ mockColor } />) ).toMatchSnapshot();
  });

  it('correctly increments the counter', () => {
    const wrapper = shallow(<CounterButton color={ mockColor } />);

    expect(wrapper.state()).toEqual({ count: 0 });
    wrapper.find('[id="counter"]').simulate("click");
    expect(wrapper.state()).toEqual({ count: 1 });
    expect(wrapper.props().color).toEqual( 'red' );
  })
})
