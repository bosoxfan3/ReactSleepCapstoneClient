import React from 'react';
import ReactDOM from 'react-dom';
import {SleepsBarChart} from './sleeps-bar-chart';
import {shallow} from 'enzyme';

describe('<SleepsBarChart />', () => {
  it('renders without crashing', () => {
    shallow(<SleepsBarChart sleeps={[]}/>);
  });
});