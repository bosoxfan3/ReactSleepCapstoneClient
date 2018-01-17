import React from 'react';
import ReactDOM from 'react-dom';
import {EveningMoodPie} from './evening-mood-pie';
import {shallow} from 'enzyme';

describe('<EveningMoodPie />', () => {
  it('renders without crashing', () => {
    shallow(<EveningMoodPie sleeps={[]}/>);
  });
});