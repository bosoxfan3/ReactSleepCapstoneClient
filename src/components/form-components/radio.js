import React from 'react';
import {Field} from 'redux-form';

export default function Radio(props) {
  const options = props.options.map((option, index) => (
    <label key={index} htmlFor={props.name}>
      <Field
        component="input"
        value={option}
        id={props.name}
        type="radio"
        name={props.name}
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