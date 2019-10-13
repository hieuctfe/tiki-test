import { shallow, mount } from 'enzyme';
import React from 'react';
import ReposList from '../index';

describe('<ReposList />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<ReposList />);
    expect(renderedComponent.length).toEqual(1);
  });
});
