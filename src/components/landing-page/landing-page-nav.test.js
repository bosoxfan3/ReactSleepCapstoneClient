import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPageNav} from './landing-page-nav';
import {shallow} from 'enzyme';

describe('<LandingPageNav />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageNav />);
  });
});