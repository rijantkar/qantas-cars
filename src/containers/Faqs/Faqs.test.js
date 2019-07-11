import React from 'react';
import { shallow } from 'enzyme';
import Faq from './Faqs';
const CMS_DATA = [
  {
    "title": "How can I check my estimated delivery window?",
    "body": "Model 3 reservation holders can check their latest delivery timing estimate in their Tesla Account."
  },
  {
    "title": "When will I be invited to configure my Model 3, and when can I take delivery?",
    "body": "<p>Model 3 reservation holders are receiving invitations to order and design Model 3 based on the time and date that they placed their reservation. Current Tesla owners have priority as a thank you for their support.</p><p>Deliveries will start in the United States first, with international deliveries starting in left-hand drive markets in late 2018, followed by right-hand drive markets in 2019.</p>"
  },
  {
    "title": "Which Model 3 features are currently available?",
    "body": "Our first Model 3 in production comes with a long-range battery, 310 miles of range, rear-wheel drive and premium upgrades throughout, beginning at $49,000 USD. In early 2018, we will introduce the option for a standard battery with 220 miles of range and standard equipment, beginning at $35,000 USD."
  }
];

describe('Faqs', () => {
  it('Faqs Component, should render correctly in "debug" mode', () => {
    const component = shallow(<Faq data={CMS_DATA} debug />);
    expect(component).toMatchSnapshot();
  });
});
