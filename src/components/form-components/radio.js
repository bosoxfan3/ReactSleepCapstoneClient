import React from 'react';
import {Field} from 'redux-form';

import './radio.css';

export default function Radio(props) {
  const name=props.input.name;
  const options = props.options.map((option, index) => (
    <div className="inline-block" key={index}>
      <Field
        component="input"
        value={option}
        id={name+index}
        type="radio"
        name={name}
      />
      <label htmlFor={name} key={index}>
      <span className="radio-option"></span>
        {option}
      </label>
    </div>
  ));
  return (
    <div>
      {options}
    </div>
  );
}