import React from 'react';
import { shallow } from 'enzyme';
import Toolbar from './Toolbar';
import routes from '../../../routes';

it('Toolbar : should render correctly for given mock function and routes', () => {
  const component = shallow(<Toolbar drawerToggleClicked={jest.fn()} routes={routes} />);
  expect(component).toMatchSnapshot();
});
