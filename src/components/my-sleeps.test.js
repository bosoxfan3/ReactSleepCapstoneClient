import React from 'react';
import {shallow, mount} from 'enzyme';

import {MySleeps} from './my-sleeps';
import {deleteSleepData} from '../actions/sleep-data';

describe('<MySleeps />', () => {
  const sleep1 = {
    awakeTime: "22:00",
    alarm: false,
    bedTime:  "08:00",
    blueLight:  false,
    caffeine:  10,
    date:  "Jan 01 2017",
    exercise:  false,
    hours:  0,
    id:  "123",
    moodAtSleep:  5,
    moodAtWake: 5
  };
  const sleep2 = {
    awakeTime: "23:00",
    alarm: true,
    bedTime:  "07:00",
    blueLight:  false,
    caffeine:  1,
    date:  "Jan 02 2017",
    exercise:  false,
    hours:  8,
    id:  "124",
    moodAtSleep:  5,
    moodAtWake: 5
  };
  it('Renders without crashing', () => {
    shallow(<MySleeps sleeps={[]}/>);
  });
  it('Renders a list of sleeps', () => {
    const sleeps = [sleep1, sleep2];
    const wrapper = shallow(<MySleeps sleeps={sleeps} />);
    const items = wrapper.find('#sleeps-div .sleep');
    expect(items.length).toEqual(sleeps.length);
  });
  // it('Should dispatch deleteSleepData when delete button is clicked', () => {
  //   const dispatch = jest.fn();
  //   const wrapper = mount(<MySleeps dispatch={dispatch} sleeps={[sleep1]} />);
  //   wrapper.find('#delete-button').simulate('click');
  //   console.log(deleteSleepData(sleep1.id));
  //   expect(dispatch).toHaveBeenCalledWith(deleteSleepData(sleep1.id));
  // });
});