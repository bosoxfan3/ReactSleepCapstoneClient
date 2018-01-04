import React from 'react';
import {connect} from 'react-redux';

import './average-hours.css';

class AverageHours extends React.Component {
  calculateData(sleeps) {
    let totalHours = 0;
    for (let i=0; i<sleeps.length; i++) {
      totalHours += sleeps[i].hours;
    }
    let averageHours = totalHours / sleeps.length;
    return averageHours;
  }
  render() {
    let data = this.calculateData(this.props.sleeps).toFixed(2);
    return (
      <div id="average-hours-div">
        <h2>Average Hours Slept</h2>
        <p><span>{data}</span></p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(AverageHours);