import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPage} from './landing-page';
import {shallow} from 'enzyme';

describe('<LandingPage />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPage />);
  });
});