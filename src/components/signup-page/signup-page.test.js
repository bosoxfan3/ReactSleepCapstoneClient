import React from 'react';
import ReactDOM from 'react-dom';
import {SignUpPage} from './signup-page';
import {shallow} from 'enzyme';

describe('<SignUpPage />', () => {
  it('renders without crashing', () => {
    shallow(<SignUpPage />);
  });
});