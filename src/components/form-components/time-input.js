import React from 'react';

export default function TimeInput(props) {
  return (
    <div>
      <div>
        {props.label}
      </div>
      <div>
        <input id={props.id} type="time" />
      </div>
    </div>
  );
}