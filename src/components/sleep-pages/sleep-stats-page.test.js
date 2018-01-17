import React from 'react';
import ReactDOM from 'react-dom';
import {SleepStatsPage} from './sleep-stats-page';
import {shallow} from 'enzyme';

describe('<SleepStatsPage />', () => {
  it('renders without crashing', () => {
    shallow(<SleepStatsPage />);
  });
});