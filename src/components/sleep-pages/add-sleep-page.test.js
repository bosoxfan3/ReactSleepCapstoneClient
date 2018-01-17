import React from 'react';
import ReactDOM from 'react-dom';
import {AddSleepPage} from './add-sleep-page';
import {shallow} from 'enzyme';

describe('<AddSleepPage />', () => {
  it('renders without crashing', () => {
    shallow(<AddSleepPage />);
  });
});