import React from 'react';
import { shallow } from 'enzyme';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';
import routes from '../../../routes';


describe('<NavigationItems/>', () => {
  const wrapper = shallow(<NavigationItems />)

  it('should not render any <NavigationItem /> elements, when routes are not present', () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(0);
  });

  it('should render two <NavigationItem /> elements, which is equal to number of routes', () => {
    wrapper.setProps({ routes })
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });

  it('should render <NavigationItem /> for home route', () => {
    wrapper.setProps({ routes })
    expect(wrapper.contains(<NavigationItem key={1} exact link="/">Home</NavigationItem>)).toEqual(true);
  });

});
