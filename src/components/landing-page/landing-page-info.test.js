import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPageInfo} from './landing-page-info';
import {shallow} from 'enzyme';

describe('<LandingPageInfo />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageInfo />);
  });
});