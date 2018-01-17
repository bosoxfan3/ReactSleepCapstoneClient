import React from 'react';
import ReactDOM from 'react-dom';
import {LogInPageNav} from './login-page-nav';
import {shallow} from 'enzyme';

describe('<LogInPageNav />', () => {
  it('renders without crashing', () => {
    shallow(<LogInPageNav />);
  });
});