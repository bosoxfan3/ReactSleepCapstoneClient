import React from 'react';
import ReactDOM from 'react-dom';
import {SignUpPageNav} from './signup-page-nav';
import {shallow} from 'enzyme';

describe('<SignUpPageNav />', () => {
  it('renders without crashing', () => {
    shallow(<SignUpPageNav />);
  });
});