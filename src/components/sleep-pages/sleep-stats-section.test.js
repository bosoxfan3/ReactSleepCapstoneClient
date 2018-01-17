import React from 'react';
import ReactDOM from 'react-dom';
import {SleepStatsSection} from './sleep-stats-section';
import {shallow} from 'enzyme';

describe('<SleepStatsSection />', () => {
  it('renders without crashing', () => {
    shallow(<SleepStatsSection sleeps={[]} />);
  });
  it('renders a line of text if there are no nights of sleep', () => {
    const wrapper = shallow(<SleepStatsSection sleeps={[]} />);
    const text = wrapper.find('#stats .no-sleep');
    expect(text.text()).toEqual('No previous nights of sleep have been recorded!');
  });
});