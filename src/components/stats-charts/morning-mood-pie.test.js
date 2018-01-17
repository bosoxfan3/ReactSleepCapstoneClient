import React from 'react';
import ReactDOM from 'react-dom';
import {MorningMoodPie} from './morning-mood-pie';
import {shallow} from 'enzyme';

describe('<MorningMoodPie />', () => {
  it('renders without crashing', () => {
    shallow(<MorningMoodPie sleeps={[]}/>);
  });
});