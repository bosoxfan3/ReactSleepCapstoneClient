import React from 'react';
import ReactDOM from 'react-dom';
import {MySleepPage} from './my-sleep-page';
import {shallow} from 'enzyme';

describe('<MySleepPage />', () => {
  it('renders without crashing', () => {
    shallow(<MySleepPage />);
  });
});