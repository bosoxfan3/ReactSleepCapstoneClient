import React from 'react';
import ReactDOM from 'react-dom';
import {LandingPageNav} from './landing-page-nav';
import {shallow, mount} from 'enzyme';
import {BrowserRouter as Router} from 'react-router-dom';

import {login} from '../../actions/auth';

describe('<LandingPageNav />', () => {
  it('renders without crashing', () => {
    shallow(<LandingPageNav />);
  });
  it('dispatches an action when demo button is clicked', () => {
    const dispatch = jest.fn();
    const wrapper = mount(<Router><LandingPageNav dispatch={dispatch} /></Router>);
    wrapper.find('#demo-link').simulate('click');
    expect(dispatch).toHaveBeenCalled();
  });
});