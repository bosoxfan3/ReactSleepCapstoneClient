import React from 'react';
import ReactDOM from 'react-dom';
import {AverageHours} from './average-hours';
import {shallow} from 'enzyme';

describe('<AverageHours />', () => {
  it('renders without crashing', () => {
    shallow(<AverageHours sleeps={[]}/>);
  });
});