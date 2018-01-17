import React from 'react';
import ReactDOM from 'react-dom';
import {CaffeineChart} from './caffeine-chart';
import {shallow} from 'enzyme';

describe('<CaffeineChart />', () => {
  it('renders without crashing', () => {
    shallow(<CaffeineChart sleeps={[]}/>);
  });
});