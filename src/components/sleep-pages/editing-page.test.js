import React from 'react';
import ReactDOM from 'react-dom';
import {EditingPage} from './editing-page';
import {shallow} from 'enzyme';

describe('<EditingPage />', () => {
  it('renders without crashing', () => {
    shallow(<EditingPage />);
  });
});