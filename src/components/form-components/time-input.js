import React from 'react';

export default class TimeInput extends React.Component {
  render() {
    return (
      <div>
        <div>
          {this.props.label}
        </div>
        <div>
          <input {...this.props.input} id={this.props.id} ref={input => (this.input = input)} type="time" />
        </div>
      </div>
    );
  }
}