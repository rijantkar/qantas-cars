import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
const CMS_DATA = {
  "heading": "Qantas Cars",
  "subheading": "Powered by the sun with the best safety record on the planet",
  "heroImageUrl": "https://drive.google.com/uc?id=1svw9VdyX4fyRHd1kggq0akDSafmdOS7L"
}

describe('Home', () => {
  it('Home: should render correctly in "debug" mode', () => {
    const component = shallow(<Home data={CMS_DATA} debug/>);
    expect(component).toMatchSnapshot();
  });
});

