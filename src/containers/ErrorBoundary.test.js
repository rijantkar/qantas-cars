import React from 'react';
import { mount } from 'enzyme';
import ErrorBoundary from './ErrorBoundary';

it('ErrorBoundary : should render errorboundary, for given children props', () => {
  const component = mount(<ErrorBoundary children={<div>TEST</div>}/>);
  expect(component).toMatchSnapshot();
  component.unmount();
});
