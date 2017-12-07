import React from 'react';

export default function Select(props) {
  const options = props.options.map((option, index) => (
    <option key={index} value={option}>{option}</option>
  ));
  return (
    <div>
      <div>
        {props.label}
      </div>
      <div>
        <select name={props.name} id={props.name} required>
          {options}
        </select>
      </div>
    </div>
  );
}