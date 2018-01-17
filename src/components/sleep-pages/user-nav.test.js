import React from 'react';
import ReactDOM from 'react-dom';
import {UserNav} from './user-nav';
import {shallow} from 'enzyme';

describe('<UserNav />', () => {
  it('renders without crashing', () => {
    shallow(<UserNav />);
  });
});