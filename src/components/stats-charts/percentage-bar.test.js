import React from 'react';
import ReactDOM from 'react-dom';
import {PercentageBar} from './percentage-bar';
import {shallow} from 'enzyme';

describe('<PercentageBar />', () => {
  it('renders without crashing', () => {
    shallow(<PercentageBar sleeps={[]}/>);
  });
});