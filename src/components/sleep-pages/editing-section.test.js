import React from 'react';
import ReactDOM from 'react-dom';
import {EditingSection} from './editing-section';
import {shallow} from 'enzyme';

describe('<EditingSection />', () => {
  it('renders without crashing', () => {
    shallow(<EditingSection sleep={[]} />);
  });
});