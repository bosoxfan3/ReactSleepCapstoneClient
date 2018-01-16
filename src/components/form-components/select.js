import React from 'react';

export default class Select extends React.Component {
  render() {
    const options = this.props.options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ));
    const {input, name} = this.props;
    return (
      <div>
        <select {...input} {...name}>
          <option value=""></option>
          {options}
        </select>
      </div>
    );
  }
}