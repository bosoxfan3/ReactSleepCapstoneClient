import React from 'react';

export default class Select extends React.Component {
  render() {
    const options = this.props.options.map((option) => (
      <option key={option} value={option}>{option}</option>
    ));
    const { input, name} = this.props;
    return (
      <div>
        <select {...input} value={this.props.defaultValue} onChange={e => this.value=e.target.value} {...name}>
          <option value=""></option>
          {options}
        </select>
      </div>
    );
  }
}