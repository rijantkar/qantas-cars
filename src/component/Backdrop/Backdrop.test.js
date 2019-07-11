import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from './Backdrop';

describe('<Backdrop/>', () => {
  const wrapper = shallow(<Backdrop />)

  it('should not contain <Backdrop /> for show flag as false', () => {
    wrapper.setProps({ show: false })
    expect(wrapper.contains(<div />)).toEqual(false);
  });

  it('should not contain <Backdrop /> for show flag as true', () => {
    wrapper.setProps({ show: true })
    expect(wrapper.contains(<div />)).toEqual(false);
  });
});
