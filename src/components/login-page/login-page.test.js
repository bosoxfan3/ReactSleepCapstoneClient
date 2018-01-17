import React from 'react';
import ReactDOM from 'react-dom';
import {LogInPage} from './login-page';
import {shallow} from 'enzyme';

describe('<LogInPage />', () => {
  it('renders without crashing', () => {
    shallow(<LogInPage />);
  });
});