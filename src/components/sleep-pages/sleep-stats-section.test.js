import React from 'react';
import ReactDOM from 'react-dom';
import {SleepStatsSection} from './sleep-stats-section';
import {shallow} from 'enzyme';

describe('<SleepStatsSection />', () => {
  it('renders without crashing', () => {
    shallow(<SleepStatsSection sleeps={[]} />);
  });
});