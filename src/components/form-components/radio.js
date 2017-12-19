import React from 'react';
import {Field} from 'redux-form';

import './radio.css';

export default function Radio(props) {
  const name=props.input.name;
  // let checked=props.checked;
  console.log(props.checked);
  console.log(props.options);
  const options = props.options.map((option, index) => (
    <div className="block">
    <Field
    component="input"
    value={option}
    id={name+index}
    type="radio"
    name={name}
    /* checked={option === checked}
    onClick={function(e) {
      props.onClick(e.target.value);
    }} */
  />
    <label key={index} htmlFor={name}>
  <span></span>
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