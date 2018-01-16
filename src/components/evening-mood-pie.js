import React from 'react';
import {connect} from 'react-redux';
import NVD3Chart from 'react-nvd3';

import './evening-mood-pie.css';

let data = [
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

export class EveningMoodPie extends React.Component {
  calculateData(sleeps) {
    for (let i=0; i<sleeps.length; i++) {
      if (sleeps[i].moodAtSleep === 1) {
        data[0].y++;
      }
      if (sleeps[i].moodAtSleep === 2) {
        data[1].y++
      }
      if (sleeps[i].moodAtSleep === 3) {
        data[2].y++
      }
      if (sleeps[i].moodAtSleep === 4) {
        data[3].y++
      }
      if (sleeps[i].moodAtSleep === 5) {
        data[4].y++
      }
      if (sleeps[i].moodAtSleep === 6) {
        data[5].y++
      }
      if (sleeps[i].moodAtSleep === 7) {
        data[6].y++
      }
      if (sleeps[i].moodAtSleep === 8) {
        data[7].y++
      }
      if (sleeps[i].moodAtSleep === 9) {
        data[8].y++
      }
      if (sleeps[i].moodAtSleep === 10) {
        data[9].y++
      }
    }
    return data;
  }
  render() {
    const datum = this.calculateData(this.props.sleeps);
    return (
      <div className="evening-mood-pie">
        <h2>Evening Mood Frequencies</h2>
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
    );
  }
}

const mapStateToProps = state => ({
  sleeps: state.sleepData.sleeps
});

export default connect(mapStateToProps)(EveningMoodPie);