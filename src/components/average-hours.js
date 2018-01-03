import React from 'react';
import {connect} from 'react-redux';

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
      <div>
        <h2>Average Hours</h2>
        <h3>{data}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(AverageHours);