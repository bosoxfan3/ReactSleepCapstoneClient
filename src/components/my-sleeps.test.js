import React from 'react';
import {shallow, mount} from 'enzyme';

import {MySleeps} from './my-sleeps';
import {deleteSleepData} from '../actions/sleep-data';

describe('<MySleeps />', () => {
  it('Renders without crashing', () => {
    shallow(<MySleeps sleeps={[]}/>);
  });
});