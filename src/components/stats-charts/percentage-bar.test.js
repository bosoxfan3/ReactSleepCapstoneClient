import React from 'react';
import ReactDOM from 'react-dom';
import {PercentageBar} from './percentage-bar';
import {shallow} from 'enzyme';

describe('<PercentageBar />', () => {
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
    moodAtWake: 6
  };
  it('renders without crashing', () => {
    shallow(<PercentageBar sleeps={[]}/>);
  });
  it('should render the positive sleep percentage', () => {
    const wrapper = shallow(<PercentageBar sleeps={[sleep1]} />);
    const positivePercentage = wrapper.find('.percentage-bar h4');
    expect(positivePercentage.text()).toEqual('100.00%');
  });
});