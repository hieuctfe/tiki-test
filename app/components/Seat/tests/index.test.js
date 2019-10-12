import React from 'react';
import { shallow } from 'enzyme';

import IssueIcon from '../index';

describe('<Seat />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<Seat />);
    expect(renderedComponent.find('div').length).toBe(1);
  });
});
