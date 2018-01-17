import React from 'react';
import ReactDOM from 'react-dom';
import {BooleanChart} from './boolean-chart';
import {shallow} from 'enzyme';

describe('<BooleanChart />', () => {
  it('renders without crashing', () => {
    shallow(<BooleanChart sleeps={[]}/>);
  });
});