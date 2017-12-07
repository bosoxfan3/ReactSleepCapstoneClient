import React from 'react';
import {Field} from 'redux-form';

export default function Radio(props) {
  const name=props.input.name;
  const options = props.options.map((option, index) => (
    <label key={index} htmlFor={name}>
      <Field
        component="input"
        value={option}
        id={name}
        type="radio"
        name={name}
      />
      {option}
    </label>
 ));
 return (
  <div>
    {options}
  </div>
 );
}