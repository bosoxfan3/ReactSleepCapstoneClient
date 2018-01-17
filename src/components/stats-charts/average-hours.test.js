import React from 'react';
import ReactDOM from 'react-dom';
import {AverageHours} from './average-hours';
import {shallow} from 'enzyme';

describe('<AverageHours />', () => {
  const sleep1 = {
    awakeTime: "22:00",
    alarm: false,
    bedTime:  "08:00",
    blueLight:  false,
    caffeine:  10,
    date:  "Jan 01 2017",
    exercise:  false,
    hours:  10,
    id:  "123",
    moodAtSleep:  5,
    moodAtWake: 5
  };
  it('renders without crashing', () => {
    shallow(<AverageHours sleeps={[]}/>);
  });
  it('should calculate average hours', () => {
    const wrapper = shallow(<AverageHours sleeps={[sleep1]} />);
    const average = wrapper.find('#average-hours-div span');
    expect(average.text()).toEqual('10.00');
  });
});