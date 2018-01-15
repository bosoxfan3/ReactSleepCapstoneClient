import React from 'react';
import {connect} from 'react-redux';
import NVD3Chart from 'react-nvd3';

import './morning-mood-pie.css';

var data = [
  {key: "One", y: 0},
  {key: "Two", y: 0},
  {key: "Three", y: 0},
  {key: "Four", y: 0},
  {key: "Five", y: 0},
  {key: "Six", y: 0},
  {key: "Seven", y: 0},
  {key: "Eight", y: 0},
  {key: "Nine", y: 0},
  {key: "Ten", y: 0},
];

class MorningMoodPie extends React.Component {
  calculateData(sleeps) {
    for (let i=0; i<sleeps.length; i++) {
      if (sleeps[i].moodAtWake === 1) {
        data[0].y++;
      }
      if (sleeps[i].moodAtWake === 2) {
        data[1].y++
      }
      if (sleeps[i].moodAtWake === 3) {
        data[2].y++
      }
      if (sleeps[i].moodAtWake === 4) {
        data[3].y++
      }
      if (sleeps[i].moodAtWake === 5) {
        data[4].y++
      }
      if (sleeps[i].moodAtWake === 6) {
        data[5].y++
      }
      if (sleeps[i].moodAtWake === 7) {
        data[6].y++
      }
      if (sleeps[i].moodAtWake === 8) {
        data[7].y++
      }
      if (sleeps[i].moodAtWake === 9) {
        data[8].y++
      }
      if (sleeps[i].moodAtWake === 10) {
        data[9].y++
      }
    }
    return data;
  }
  render() {
    const datum = this.calculateData(this.props.sleeps);
    return (
      <div className="morning-mood-pie">
        <h2>Morning Mood Frequencies</h2>
        <NVD3Chart
          id="chart"
          height={370}
          type="pieChart"
          datum={datum}
          x="key"
          y="y"
          tooltip={{enabled: false}}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(MorningMoodPie);