import React from 'react';
import {Field} from 'redux-form';

import './radio.css';

export default function Radio(props) {
  const name=props.input.name;
  const input=props.input;
  const options = props.options.map((option, index) => (
    <div className="inline-block" key={index}>

      <label htmlFor={name} key={index}>
      <span className="radio-option"></span>
        {option}
      </label>
      <Field
        component="input"
        value={option}
        id={name+index}
        type="radio"
        name={name}
        onClick={event => console.log("asd")}
      />
    </div>
  ));
  return (
    <div>
      {options}
    </div>
  );
}
//    onChange={event => input.onChange(option)}
